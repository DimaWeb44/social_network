import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getMe, logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import s from './Header.module.css'

const Header = (props: any) => {
    const data = useSelector<AppStateType, any>((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMe())
    }, [])

    return <header className={s.header}>
        <img src={'https://cdn.onlinewebfonts.com/svg/img_197729.png'}/>
        <div className={s.loginBlock}>
            {data.login
                ? <div>{data.login} - <button onClick={props.logout}>logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>

}
export default  connect(null,{logout})(Header)