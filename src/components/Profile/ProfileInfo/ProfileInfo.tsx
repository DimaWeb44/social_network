import React from 'react';
import Preloader from '../../common/Preioader/Preloader';
import s from './ProfileInfo.module.css'
import {ProfileStatus} from './ProfileStatus'

const ProfileInfo = (props: any) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (<div>
            <div>
                <img src={'https://www.rosphoto.com/images/u/articles/1510/3_13.jpg'} alt={''}/>
            </div>
            <div className={s.descriptionBloc}>
                <div>
                    <img src={props.profile.photos.large} alt={''}/>
                </div>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>Name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>
            </div>
        </div>

    )

}
export default ProfileInfo;
