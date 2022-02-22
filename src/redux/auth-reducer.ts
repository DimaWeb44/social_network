import {ActionsType} from "./store"

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
}


export const setAuthUserData = (userId: string, email: string, login: string): SetAuthUserDataType => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    }
})

let initialState = {
    userId: null,
    email: null,
    login: null,
}


export const authReducer = (state: InitialStateType = initialState, action: SetAuthUserDataType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}

export default authReducer