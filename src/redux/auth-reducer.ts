import { authAPI } from "../api/api"

export type SetAuthUserDataType = {
    type: 'SET_AUTH_USER_DATA',
    data: {
        userId: null | string,
        email: null | string,
        login: null | string,
        isAuth: boolean
    }
}
const SET_USER_DATA = 'SET_AUTH_USER_DATA'

export type InitialStateType = {
    userId: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}


export const setAuthUserData = (userId: null | string, email: null | string, login: null | string, isAuth: boolean): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
})

export const getMe = () => (dispatch: any) => {
    authAPI.getMe().then((data: any) => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: any) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then((data: any) => {
        if (data.data.resultCode === 0) {
            dispatch(getMe())
        } else {
            setStatus(data.data.messages)
        }
    })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout().then((data: any) => {
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: InitialStateType = initialState, action: SetAuthUserDataType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export default authReducer

