import { ChangeEvent } from "react"
import {v1} from "uuid"
import {ActionsType, DialogsPageType, MessagesType, SendMessageActionType, UpdateNewMessageTextActionType} from "./store"

const UPDATE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const updateNewMessageTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextMessage: e.currentTarget.value
})

let initialState = {
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
}

export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessagesType = {id: v1(), message: state.textForNewMessage}
            state.messages.push(newMessage)
            state.textForNewMessage = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.textForNewMessage = action.newTextMessage
            return state
        default:
            return state
    }
}

export default dialogsReducer