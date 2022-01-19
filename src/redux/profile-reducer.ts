import { ChangeEvent } from "react"
import {v1} from "uuid"
import {ActionsType, AddPostActionType, NewTextChangeHandlerActionType, PostsType, ProfilePageType} from "./state"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const newTextChangeHandlerActionCreator = (e: ChangeEvent<HTMLTextAreaElement>): NewTextChangeHandlerActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: e.currentTarget.value
})

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {id: v1(), message: state.massageForNewPost, likesCount: 0}
            state.posts.push(newPost)
            state.massageForNewPost = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.massageForNewPost = action.newText
            return state
        default:
            return state
    }
}
export default profileReducer