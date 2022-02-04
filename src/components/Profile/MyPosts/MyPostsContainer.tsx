import {connect} from 'react-redux';
import React from 'react';
import {addPostActionCreator, newTextChangeHandlerActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (store: any) => {
    return {
        posts: store.profilePage.posts,
        message: store.profilePage.massageForNewPost
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newTextChangeHandler: (text: string) => {
            debugger
            dispatch(newTextChangeHandlerActionCreator(text))
        }
    }
}

const MyPostsContaner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContaner



