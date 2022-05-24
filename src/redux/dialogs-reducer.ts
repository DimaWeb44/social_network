import {v1} from "uuid"

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    text: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

export type InitialStateType = typeof initialState

const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessage = (text: string): SendMessageActionType => ({type: SEND_MESSAGE, text})

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
    ] as Array<MessagesType>
}

export const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage: MessagesType = {id: v1(), message: action.text}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}

export default dialogsReducer