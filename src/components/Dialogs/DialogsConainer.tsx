import React from "react";
import {
    InitialStateType,
    sendMessage,
    newMessages
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    newMessages: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, newMessages})(Dialogs)
export default DialogsContainer