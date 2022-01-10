import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type StatePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    changeNewText: (newText: string) => void
}

const Profile = (props: StatePropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 message={props.profilePage.massageForNewPost}
                 changeNewText={props.changeNewText}/>
    </div>)

}
export default Profile;




