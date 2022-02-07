import axios from 'axios';
import React from 'react';
import {v1} from 'uuid';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import userPhoto from '../../assets/images/icon.png'

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div>{
        props.users.map((u: any) => {
            return <div key={u.id}>
                  <span>
                      <div className={s.item}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}/>
                      </div>
                      <div>
                          <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                      </div>
                  </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                             <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>
        })
    }
    </div>
}

export default Users