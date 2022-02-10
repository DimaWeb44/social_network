import axios from 'axios';
import React, {Component, ReactNode} from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/icon.png'
import {UsersPropsType} from './UsersContainer';


class Users extends Component <UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(): ReactNode {
        return <div>
            {
                this.props.users.map((u: any) => {
                    return <div key={u.id}>
                  <span>
                      <div className={s.item}>
                            <img src={u.photos.small ? u.photos.small : userPhoto}/>
                      </div>
                      <div>
                          <button
                              onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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
}

export default Users