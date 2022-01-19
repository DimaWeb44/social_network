import { v1 } from "uuid"
import {ActionsType, DialogsPageType, MessagesType } from "./state"

const UPDATE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.textForNewMessage = action.newTextMessage
  } else if (action.type === SEND_MESSAGE) {
    let newMessage: MessagesType = {id: v1(), message: state.textForNewMessage}
    state.messages.push(newMessage)
    state.textForNewMessage = ""
  }
  return state
}

export default dialogsReducer