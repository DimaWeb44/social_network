import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, ActionsType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type StatePropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: StatePropsType) => {
    let dialogsElements = props.state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: any) => <Message message={m.message} id={m.id}/>)

    const newMessagesChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(updateNewMessageTextActionCreator(e))

    const onSendMessageClik = () => {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div>{messagesElements}</div>
                    <div><textarea value={props.state.textForNewMessage}
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