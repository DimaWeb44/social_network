export  type UserType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>
}

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
export const followAC = (userID: string) => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})

let initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map((u: UserType) => {
                    return u.id === action.userID ? {...u, followed: !u.followed} : u
                })
            }
        }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export default usersReducer