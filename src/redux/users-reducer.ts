import {Dispatch} from "react"
import {usersAPI} from "../api/api"

export  type UserType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>
}

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLOWING_IN_PROGRESS = 'TOGGLE_FOLOWING_IN_PROGRESS'
export const toggleFollow = (userID: string) => ({type: TOGGLE_FOLLOW, userID})
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFolowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_FOLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const follow = (followed: boolean, id: string) => (dispatch: any) => {
    dispatch(toggleFolowingProgress(true, id))
    followed ?
        (usersAPI.deleteFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollow(id))
            }
            dispatch(toggleFolowingProgress(false, id))
        }))
        : (usersAPI.postFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollow(id))
            }
            dispatch(toggleFolowingProgress(false, id))
        }))


}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    return u.id === action.userID ? {...u, followed: !u.followed} : u
                })
            }
        }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: string) => id != action.userId)
            }
        default:
            return state
    }
}

export default usersReducer