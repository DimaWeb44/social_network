import { authAPI } from "../api/api"

export type SetAuthUserDataType = {
    type: 'SET_AUTH_USER_DATA',
    data: {
        userId: string,
        email: string,
        login: string,
    }
}
const SET_USER_DATA = 'SET_AUTH_USER_DATA'

export type InitialStateType = {
    userId: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}


export const setAuthUserData = (userId: string, email: string, login: string): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    }
})

export const getMe = () => (dispatch: any) => {
    authAPI.getMe().then((data: any) => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
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
                isAuth: true
            }
        }
        default:
            return state
    }
}

export default authReducer