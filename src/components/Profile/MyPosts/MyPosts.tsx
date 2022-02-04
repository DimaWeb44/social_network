import React, {ChangeEvent} from 'react';
import {PostsType} from '../../../redux/store';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<{ id: string, message: string, likesCount: number }>
    newTextChangeHandler: (text: string) => void
    addPost: () => void
    message: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map((p: PostsType) => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                               id={p.id}/>)

    const onAddPost = () => {
        props.addPost()
    }

    const onNewTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.newTextChangeHandler(text)
    }

    return <div className={s.postsBloc}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.message}
                          onChange={onNewTextChangeHandler}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>


}
export default MyPosts;

