import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {
    let postsElement = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const addPost = () => {
        props.addPost()
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeNewText(e.currentTarget.value)
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

