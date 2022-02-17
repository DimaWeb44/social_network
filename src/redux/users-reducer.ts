export  type UserType = {
    id: string
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const followAC = (userID: string) => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (page:number) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
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
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }
}

export default usersReducer