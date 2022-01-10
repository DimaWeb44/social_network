import store from "./redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} changeNewText={store.changeNewText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree ()

store.subscribe(rerenderEntireTree)
