import { connect } from 'http2';
import React, {ChangeEvent} from 'react';
import {addPostActionCreator, newTextChangeHandlerActionCreator} from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';


let mapStateToProps = (state: AppStateType) => {
    return{
        posts: state.profilePage.posts,
        message: state.profilePage.massageForNewPost
    }
}
let mapDispatchToprops = (dispatch: any) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newTextChangeHandler: (text: string) => {
            dispatch(newTextChangeHandlerActionCreator(text))
        }
    }
}

const MyPostsContaner = connect(mapStateToProps, mapDispatchToprops)(MyPosts)
export default MyPostsContaner



