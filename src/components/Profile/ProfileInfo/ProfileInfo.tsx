import React from 'react';
import Preloader from '../../common/Preioader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props: any) => {
    if (!props.profile){
        return <Preloader/>
    }
    debugger
    return (<div>
            <div>
                <img src={'https://www.rosphoto.com/images/u/articles/1510/3_13.jpg'} alt={''}/>
            </div>
            <div className={s.descriptionBloc}>
                <div>
                    <img src={props.profile.photos.large} alt={''}/>
                </div>
                ava+description
            </div>
        </div>

    )

}
export default ProfileInfo;
