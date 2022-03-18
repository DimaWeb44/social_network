import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {authAPI} from '../../api/api';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import s from './Header.module.css'

const Header = () => {
    const data = useSelector<AppStateType, any>((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        authAPI.getMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }, [])

    return <header className={s.header}>
        <img src={'https://cdn.onlinewebfonts.com/svg/img_197729.png'}/>
        <div className={s.loginBlock}>
            {data.login ? data.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>

}
export default Header;