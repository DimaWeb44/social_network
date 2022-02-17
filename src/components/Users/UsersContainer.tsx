import {connect} from 'react-redux';
import React, {Component, ReactNode} from 'react';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import axios from 'axios';
import Users from './Users';

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}

type MapDispatchToPropsType = {
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends Component <UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanget = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(): ReactNode {

        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      onPageChanget={this.onPageChanget}
                      toggleFollow={this.props.toggleFollow}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        toggleFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContaner = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContaner

