import React, {useEffect} from 'react';
import Profile from './Profile';
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {withAuthNavigate} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


function ProfileContainer(props: any) {
    let {userID} = useParams()
    useEffect(() => {
        if (!userID) {
            userID = props.userID
        }
        props.getUserProfile(userID)
        props.getUserStatus(userID)
    }, [userID])
    return (<div>
        <Profile profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>)
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default  compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateUserStatus}),
    withAuthNavigate
)(ProfileContainer)




