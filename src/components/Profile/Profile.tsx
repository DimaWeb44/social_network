import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContaner from './MyPosts/MyPostsContainer';
import { Navigate } from 'react-router-dom';


const Profile = (props: any) => {
    if (!props.isAuth) {
        return  <Navigate to="/login"/>
    }
    return (<div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContaner/>
    </div>)
}


export default Profile;




