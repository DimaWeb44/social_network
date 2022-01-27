import React, {ChangeEvent} from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "http2";
import { AppStateType } from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToprops = (dispatch: any) => {
    return{
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