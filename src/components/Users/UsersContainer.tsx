import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import {followAC, setUsersAC, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import { Dispatch } from 'redux';

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    toggleFollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        toggleFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContaner = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContaner

