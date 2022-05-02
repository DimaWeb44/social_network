import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContaner from './MyPosts/MyPostsContainer';


const Profile = (props: any) => {
    return (<div>
        <ProfileInfo profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContaner/>
    </div>)
}


export default Profile;




