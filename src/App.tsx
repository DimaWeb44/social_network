import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsConainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {

    return (<div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/'} element={<Navigate to="/profile/"/>}/>
                    <Route path="/profile/" element={<ProfileContainer/>}>
                        <Route path=":userID" element={<ProfileContainer/>}/>
                    </Route>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
