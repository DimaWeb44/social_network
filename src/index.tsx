import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { RootStateType } from "./redux/store";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
