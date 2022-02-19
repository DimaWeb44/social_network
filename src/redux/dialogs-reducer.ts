import {v1} from "uuid"
import {
    ActionsType,
    SendMessageActionType,
    UpdateNewMessageTextActionType
} from "./store"


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

export type InitialStateType = typeof initialState

const UPDATE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const newMessages = (text: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextMessage: text
})
export const sendMessage = (): SendMessageActionType => ({type: SEND_MESSAGE})

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Max"},
        {id: 3, name: "Pol"},
        {id: 4, name: "Zak"},
        {id: 5, name: "Rita"},
        {id: 6, name: "Ben"}
    ] as Array<DialogsType>,
    messages: [
        {id: '1', message: "Hi"},
        {id: '2', message: "Go"},
        {id: '3', message: "Rrrr"},
        {id: '4', message: "Gut"},
        {id: '5', message: "Yes"},
    ] as Array<MessagesType>,
    textForNewMessage: "",
}


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage: MessagesType = {id: v1(), message: state.textForNewMessage}
            return {
                ...state,
                textForNewMessage: '',
                messages: [...state.messages, newMessage]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, textForNewMessage: action.newTextMessage}
        }
        default:
            return state
    }
}

export default dialogsReducer