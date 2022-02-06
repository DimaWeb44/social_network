import React from "react";
import {MessagesType} from "../../../redux/dialogs-reducer";
import s from './../Dialogs.module.css'

const Message = (props: MessagesType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message