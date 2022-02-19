import {v1} from "uuid"
import {ActionsType, AddPostActionType, NewTextChangeHandlerActionType} from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const addPost = (): AddPostActionType => ({type: ADD_POST})
export const newTextChangeHandler = (text: string): NewTextChangeHandlerActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})

export  type InitialStateType = typeof initialState
export type PostType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    profile: null,
    massageForNewPost: "",
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
            let newPost: PostType = {id: v1(), message: state.massageForNewPost, likesCount: 0}
            return {
                ...state,
                massageForNewPost: "",
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, massageForNewPost: action.newText}
        }
        default:
            return state
    }
}
export default profileReducer