import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/store";

type StatePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: StatePropsType) => {
    return (<div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 dispatch={props.dispatch}
                 message={props.profilePage.massageForNewPost}/>
    </div>)
}


export default Profile;




