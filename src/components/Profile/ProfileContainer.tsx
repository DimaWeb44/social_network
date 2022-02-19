import React, {Component} from 'react';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile} from './../../redux/profile-reducer'
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';


class ProfileAPIContainer extends Component <any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>)
    }
}

let mapStateToProps = (state: AppStateType) => {
    debugger
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)
export default ProfileContainer







