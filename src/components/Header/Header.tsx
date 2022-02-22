import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import s from './Header.module.css'

const Header = () => {
    const data = useSelector<AppStateType, any>((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    })

    return <header className={s.header}>
        <img src={'https://cdn.onlinewebfonts.com/svg/img_197729.png'}/>
        <div className={s.loginBlock}>
            {data.login ? data.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>

}
export default Header;