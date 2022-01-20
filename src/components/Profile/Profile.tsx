import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import MyPostsContaner from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPostsContaner store={props.store}/>
    </div>)
}


export default Profile;




