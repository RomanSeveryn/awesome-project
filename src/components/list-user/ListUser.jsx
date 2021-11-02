import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../user-card/UserCard';
import  './style.css'
import { loadUsers } from '../../store/users/action';


const ListUser = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const newUsers = {...users}

  React.useEffect(() => {
      dispatch(loadUsers())
  }, [])

  return (
    <div className='listContainer'>
      {newUsers.users.map(user => (
        <UserCard name={user.name} surName={user.username} key={user.id} phrase={user.company.catchPhrase}/>
      ))}
    </div>
  );
}

export default ListUser;
