import React, {useEffect} from 'react';
import Profile from './Profile';
import {getUserProfile, setUserProfile} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Navigate, useParams} from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthRedirect';


function ProfileContainer(props: any) {
    let {userID} = useParams()
    useEffect(() => {
        if (!userID) {
            userID = '22256'
        }
        props.getUserProfile(userID)
    }, [userID])
    return (<div>
        <Profile {...props} profile={props.profile}/>
    </div>)
}

let AuthNavigateComponent = withAuthNavigate(ProfileContainer)

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUserProfile, getUserProfile})(AuthNavigateComponent)


