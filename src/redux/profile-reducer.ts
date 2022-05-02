import {v1} from "uuid"
import { profileAPI } from "../api/api"


const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
export const addPost = (): any => ({type: ADD_POST})
export const newTextChangeHandler = (text: string): any => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserStatus = (status: any) => ({type: SET_STATUS, status})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userID: string) => (dispatch: any) => {
    profileAPI.getUserId(userID).then((data:any)  => {
        dispatch(setUserProfile(data))
    })
}
export const getUserStatus = (userID: string) => (dispatch: any) => {
    profileAPI.getUserStatus(userID).then((response:any)  => {
        dispatch(setUserStatus(response))
    })
}
export const updateUserStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateUserStatus(status).then((response:any)  => {
        if (response.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    })
}

export  type InitialStateType = typeof initialState
export type PostType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    profile: null,
    massageForNewPost: "",
    status: '',
    posts: [
        {id: '1', message: "Hi Dima", likesCount: 21},
        {id: '1', message: "Hi Max", likesCount: 33},
        {id: '1', message: "Hi Don", likesCount: 22}
    ] as Array<PostType>,
}

export const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case ADD_POST: {
            if (state.massageForNewPost === "") {return {...state} }
            else {let newPost: PostType = {id: v1(), message: state.massageForNewPost, likesCount: 0}
                return {
                    ...state,
                    massageForNewPost: "",
                    posts: [...state.posts, newPost]
                }
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, massageForNewPost: action.newText}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}
export default profileReducer