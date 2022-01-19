import React, {ChangeEvent} from 'react';
import {ActionsType, addPostActionCreator, newTextChangeHandlerActionCreator} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<{ id: string, message: string, likesCount: number }>
    dispatch: (action: ActionsType) => void
    message: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(newTextChangeHandlerActionCreator(e))

    return <div className={s.postsBloc}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.message}
                          onChange={newTextChangeHandler}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>


}
export default MyPosts;

