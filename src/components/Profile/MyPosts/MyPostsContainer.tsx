import React, {ChangeEvent} from 'react';
import {addPostActionCreator, newTextChangeHandlerActionCreator} from '../../../redux/profile-reducer';
import {ActionsType, StoreType} from '../../../redux/store';
import MyPosts from './MyPosts';

type MyPostsContanerPropsType = {
    store: StoreType
}

const MyPostsContaner = (props: MyPostsContanerPropsType) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const newTextChangeHandler = (text: string) => {
        props.store.dispatch(newTextChangeHandlerActionCreator(text))
    }
    return <MyPosts updateNewPostText={newTextChangeHandler}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    message={state.profilePage.massageForNewPost}/>
}

export default MyPostsContaner;

