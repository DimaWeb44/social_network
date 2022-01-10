import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<div>
            <div>
                <img src={'https://www.rosphoto.com/images/u/articles/1510/3_13.jpg'} alt={''}/>
            </div>
            <div className={s.descriptionBloc}>
                ava+description
            </div>
        </div>

    )

}
export default ProfileInfo;