import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../user-card/UserCard';
import { loadUsers } from '../../store/users/action';
import  './style.css'


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
