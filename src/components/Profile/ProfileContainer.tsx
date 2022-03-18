import React, {useEffect} from 'react';
import Profile from './Profile';
import {setUserProfile} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {profileAPI} from '../../api/api';


function ProfileContainer(props: any) {
    let {userID} = useParams()
    if (!userID) {
        userID = '22256'
    }
    useEffect(() => {
        profileAPI.getUserId(userID).then(data => {
            props.setUserProfile(data)
        })
    }, [userID])
    return (<div>
        <Profile {...props} profile={props.profile}/>
    </div>)
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)


