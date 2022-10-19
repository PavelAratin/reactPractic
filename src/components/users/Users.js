import User from '../user/User';
import './Users.css';
import Skeleton from '../skeleton/Skeleton';
import React from 'react';
const Users = ({ isLoading, items, searchValue,onClickInvite,isInvited,invites }) => {
  console.log(invites)
  return (
    <ul className='users__list'>
      {isLoading
        ? <Skeleton></Skeleton>
        : <React.Fragment>
          {items.filter(obj => {
            if (obj.first_name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
          }).map(obj =>
            <User
              key={obj.id}
              id={obj.id}
              email={obj.email}
              ava={obj.avatar}
              name={obj.first_name}
              onClickInvite={onClickInvite}
              isInvited={invites.includes(obj.id)}
            ></User>)}
        </React.Fragment>}
    </ul>
  )
}

export default Users;