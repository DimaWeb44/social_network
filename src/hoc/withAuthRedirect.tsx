import {Navigate} from "react-router-dom";
import React, { ReactType } from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapPropsType = {
    isAuth: boolean;
}
type MapDispatchToPropsType = {}

const mapStateToPropsForNavigate = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
} as MapPropsType);

export function withAuthNavigate(WrappedComponent: ReactType) {
    function NavigateComponent(props: MapPropsType & MapDispatchToPropsType) {
        if (!props.isAuth) return <Navigate to='/login'/>
        return <WrappedComponent {...props}/>
    }

    return connect(mapStateToPropsForNavigate)(NavigateComponent);
}