import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import UserCard from '../user-card/UserCard';
import  './style.css'
import { loadUsers } from '../../store/users/action';


const ListUser = () => {

  const [users, setUsers] = React.useState([])
  const dispatch = useDispatch()

  // const response = () => {
  //  axios
  // .get(
  //   `https://jsonplaceholder.typicode.com/users`
  // )
  // .then(res => {
  //   const br = res.data
  //   setUsers(br)
  // })
  // }
 
  console.log('loadUsers', loadUsers())

  React.useEffect(async() => {
    // response()
    await dispatch(loadUsers())
  }, [])

  
  // console.log('users', users)

  // const newUsers = {...users}

  // console.log('newUsers', newUsers)

  return (
    <div className='listContainer'>
      {users.map(user => (
        <UserCard name={user.name} surName={user.username} key={user.id} phrase={user.company.catchPhrase}/>
      ))}
    </div>
  );
}

export default ListUser;
