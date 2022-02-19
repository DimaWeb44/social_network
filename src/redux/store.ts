import React from "react";
import {v1} from "uuid";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store: StoreType = {
    _state: {
        profilePage: {
            massageForNewPost: "",
            posts: [
                {id: '1', message: "Hi Dima", likesCount: 21},
                {id: '1', message: "Hi Max", likesCount: 33},
                {id: '1', message: "Hi Don", likesCount: 22}
            ],
            profile: null
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Max"},
                {id: 3, name: "Pol"},
                {id: 4, name: "Zak"},
                {id: 5, name: "Rita"},
                {id: 6, name: "Ben"}
            ],
            messages: [
                {id: '1', message: "Hi"},
                {id: '2', message: "Go"},
                {id: '3', message: "Rrrr"},
                {id: '4', message: "Gut"},
                {id: '5', message: "Yes"},
            ],
            textForNewMessage: "",
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("change store")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}
type  StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
 type DialogsType = {
    id: number
    name: string
}
 type MessagesType = {
    id: string
    message: string
}
 type PostsType = {
    id: string
    message: string
    likesCount: number
}
 type ProfilePageType = {
    posts: Array<PostsType>
    massageForNewPost: string
     profile: any
}
 type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    textForNewMessage: string
}
 type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}
export type ActionsType =
    NewTextChangeHandlerActionType
    | AddPostActionType
    | UpdateNewMessageTextActionType
    | SendMessageActionType
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type NewTextChangeHandlerActionType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageTextActionType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newTextMessage: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export default store
