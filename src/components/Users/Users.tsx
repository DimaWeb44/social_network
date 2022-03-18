import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/icon.png'
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../api/api';


const Users = (props: any) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let page: number[] = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return <div>
        <div>
            {page.map((p) => {
                return <span onClick={() => props.onPageChanget(p)}
                             className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })}
        </div>
        {
            props.users.map((u: any) => {
                return <div key={u.id}>
                  <span>
                      <div className={s.item}>
                           <NavLink to={"/profile/" + u.id}> <img
                               src={u.photos.small ? u.photos.small : userPhoto}/> </NavLink>
                      </div>
                      <div>
                          <button
                              disabled={props.followingInProgress.some((id:string) => id === u.id)}
                              onClick={() => {
                                  props.toggleFolowingProgress(true, u.id)
                                  u.followed ?
                                      (followAPI.deleteFollow(u.id).then(data => {
                                          if (data.resultCode === 0) {
                                              props.toggleFollow(u.id)
                                          }
                                          props.toggleFolowingProgress(false, u.id)
                                      }))
                                      : (followAPI.postFollow(u.id).then(data => {
                                          if (data.resultCode === 0) {
                                              props.toggleFollow(u.id)
                                          }
                                          props.toggleFolowingProgress(false, u.id)
                                      }))
                              }}>{u.followed ? 'Unfollow' : 'Follow'}</button>
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