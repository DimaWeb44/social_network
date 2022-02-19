import React, {useEffect} from 'react';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';


function ProfileContainer (props: any) {
    let {userID} = useParams()
    if (!userID) {
        userID = '22256'
    }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            props.setUserProfile(response.data)
        })
    })
    return (<div>
        <Profile {...props} profile={props.profile}/>
    </div>)
}

    let mapStateToProps = (state: AppStateType) => {
        return {
            profile: state.profilePage.profile
        }
    }

export default  connect(mapStateToProps, {setUserProfile})(ProfileContainer)


