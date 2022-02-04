import {v1} from "uuid"
import {ActionsType, AddPostActionType, NewTextChangeHandlerActionType, PostsType, ProfilePageType} from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const newTextChangeHandlerActionCreator = (text: string): NewTextChangeHandlerActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


let initialState = {
    massageForNewPost: "",
    posts: [
        {id: '1', message: "Hi Dima", likesCount: 21},
        {id: '1', message: "Hi Max", likesCount: 33},
        {id: '1', message: "Hi Don", likesCount: 22}
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {id: v1(), message: state.massageForNewPost, likesCount: 0}
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