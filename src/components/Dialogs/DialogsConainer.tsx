import React from "react";
import {InitialStateType, newMessages, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


type MapStateToPropsType = {
    dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    newMessages: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default  compose<React.ComponentType>(
        connect(mapStateToProps, {sendMessage, newMessages}),
        withAuthNavigate
    )(Dialogs)
