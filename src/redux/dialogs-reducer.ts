import { ChangeEvent } from "react"
import {v1} from "uuid"
import {ActionsType, DialogsPageType, MessagesType, SendMessageActionType, UpdateNewMessageTextActionType} from "./state"

const UPDATE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
export const updateNewMessageTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextMessage: e.currentTarget.value
})
export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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