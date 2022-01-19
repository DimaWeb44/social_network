import { v1 } from "uuid"
import {ActionsType, PostsType, ProfilePageType } from "./state"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    if (action.type === ADD_POST) {
        let newPost: PostsType = {id: v1(), message: state.massageForNewPost, likesCount: 0}
        state.posts.push(newPost)
        state.massageForNewPost = ""
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.massageForNewPost = action.newText
    }
    return state
}
export default profileReducer