import React from 'react';
import {v1} from 'uuid';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';

const Users = (props: UsersPropsType) => {
   if(props.users.length === 0 ) {
       props.setUsers([
           {
               id: v1(),
               photoURL: 'https://fotki.ykt.ru/albums/userpics/23871/803469.jpg',
               followed: false,
               fullName: "Dima",
               status: 'I am boss',
               location: {city: 'Minsk', country: 'Belarus'}
           },
           {
               id: v1(),
               photoURL: 'https://i.pinimg.com/originals/3f/f1/20/3ff120824122616c4922797749f58fba.jpg',
               followed: true,
               fullName: "Max",
               status: 'I am boss',
               location: {city: 'Moscow', country: 'Russia'}
           },
           {
               id: v1(),
               photoURL: 'https://pictureholiday.ru/wp-content/uploads/2018/05/24-10-800x551-min.jpg',
               followed: false,
               fullName: "Zak",
               status: 'I am boss',
               location: {city: 'Polotsk', country: 'Belarus'}
           },
           {
               id: v1(),
               photoURL: 'https://bipbap.ru/wp-content/uploads/2018/01/ec6fb8fc51e8ea719853fcf3e0c71449e7083c73r1-1272-1920v2_uhq.jpg',
               followed: true,
               fullName: "Pol",
               status: 'I am boss',
               location: {city: 'Kiev', country: 'Ukraine'}
           },
       ],)
   }

    return <div>{
        props.users.map((u: any) => {
            return <div key={u.id}>
                  <span>
                      <div className={s.item}>
                            <img src={u.photoURL}/>
                      </div>
                      <div>
                          <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                      </div>
                  </span>
                <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>
        })
    }
    </div>
}

export default Users