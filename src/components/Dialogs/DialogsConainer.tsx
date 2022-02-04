import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (store: any) => {
    return {
        dialogsPage: store.dialogsPage
    }
}
let mapDispatchToprops = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        newMessages: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToprops)(Dialogs)
export default DialogsContainer