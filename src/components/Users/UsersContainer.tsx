import {connect} from 'react-redux';
import React, {Component, ReactNode} from 'react';
import {follow, getUsers, setCurrentPage, toggleFolowingProgress} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from '../common/Preioader/Preloader';

type MapStateToPropsType = {
    users: any,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>
}

type MapDispatchToPropsType = {
    setCurrentPage: (page: number) => void
    toggleFolowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number)=> void
    follow: (followed: boolean, id: string)=> void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIComponent extends Component <UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanget = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render(): ReactNode {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanget={this.onPageChanget}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   toggleFolowingProgress={this.props.toggleFolowingProgress}
                   follow={this.props.follow}

            /></>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContaner = connect(mapStateToProps, {
    toggleFolowingProgress,
    setCurrentPage,
    getUsers,
    follow
})(UsersAPIComponent)
export default UsersContaner

