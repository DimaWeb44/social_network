import {v1} from "uuid";


let store: StoreType = {
    _state: {
        profilePage: {
            massageForNewPost: "",
            posts: [
                {id: '1', message: "Hi Dima", likesCount: 21},
                {id: '1', message: "Hi Max", likesCount: 33},
                {id: '1', message: "Hi Don", likesCount: 22}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Max"},
                {id: 3, name: "Pol"},
                {id: 4, name: "Zak"},
                {id: 5, name: "Rita"},
                {id: 6, name: "Ben"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Go"},
                {id: 3, message: "Rrrr"},
                {id: 4, message: "Gut"},
                {id: 5, message: "Yes"},
            ],
        }
    },
    _callSubscriber() {
        console.log("change store")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost: PostsType = {id: v1(), message: this._state.profilePage.massageForNewPost, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.massageForNewPost = ""
            this._callSubscriber()
        } else if (action.type === 'CHANGE-NEW-TEXT'){
            this._state.profilePage.massageForNewPost = action.newText
            this._callSubscriber()
        }
    }
}

export  type  StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: {type: string, newText: string}) => void
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    massageForNewPost: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export default store
