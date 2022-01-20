import React, {ChangeEvent} from "react";
import {StoreType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState()

    const newMessagesChangeHandler = (text: string) => props.store.dispatch(updateNewMessageTextActionCreator(text))

    const onSendMessageClik = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return <Dialogs newMessages={newMessagesChangeHandler}
                    sendMessage={onSendMessageClik}
                    dialogsPage={state.dialogsPage}
    />
}
export default DialogsContainer