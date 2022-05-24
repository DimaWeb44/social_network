import {connect} from 'react-redux';
import React from 'react';
import {addPost, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';


type MapStateToPropsType = {
    posts: Array<PostType>
}

type MapDispatchToPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContaner = connect(mapStateToProps, {addPost})(MyPosts)
export default MyPostsContaner



