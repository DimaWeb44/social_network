import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsConainer";
import {DialogsType, MessagesType} from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";


const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map((d: DialogsType) => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m: MessagesType) => <Message key={m.id} message={m.message} id={m.id}/>)

    const newMessagesChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.newMessages(text)
    }

    const onSendMessageClik = () => {
        props.sendMessage()
    }

    if (!props.isAuth) {
      return  <Navigate to="/login"/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div>{messagesElements}</div>
                    <div><textarea value={state.textForNewMessage}
                                   onChange={newMessagesChangeHandler}/></div>
                    <div>
                        <button onClick={onSendMessageClik}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs