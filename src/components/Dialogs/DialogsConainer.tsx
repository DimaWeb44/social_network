import React from "react";
import {InitialStateType, newMessages, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    newMessages: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {sendMessage, newMessages})(Dialogs)
export default DialogsContainer