import {connect} from 'react-redux';
import React from 'react';
import {addPost, newTextChangeHandler, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
    posts: Array<PostType>
    message: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    newTextChangeHandler: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.massageForNewPost
    }
}

const MyPostsContaner = connect(mapStateToProps, {addPost, newTextChangeHandler})(MyPosts)
export default MyPostsContaner



