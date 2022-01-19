import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ActionsType, RootStateType} from "./redux/state";

type StatePropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App(props: StatePropsType) {

    return (<div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}
                                                               dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}
                                                               dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
