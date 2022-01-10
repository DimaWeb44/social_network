import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type StatePropsType = {
    state: DialogsPageType
}


const Dialogs = (props: StatePropsType) => {

    let dialogsElements = props.state.dialogs.map((d:any) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m:any) => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messagesElements}
                </div>

            </div>
        </div>
    )
}
export default Dialogs