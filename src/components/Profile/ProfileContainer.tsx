import React, {useEffect} from 'react';
import Profile from './Profile';
import {getUserProfile, setUserProfile} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Navigate, useParams} from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


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



let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default  compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile}),
    withAuthNavigate
)(ProfileContainer)




