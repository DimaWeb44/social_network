import React from 'react';
import {PostType} from '../../../../redux/profile-reducer';
import s from './Post.module.css'

const Post = (props: PostType) => {
    return <div className={s.item}>
        <div>
            <img src={'https://cs8.pikabu.ru/avatars/2320/x2320112-250958673.png'}/>
            {props.message}
        </div>
        <span>like {props.likesCount}</span>
    </div>


}
export default Post;