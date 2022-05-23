import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../user-card/UserCard'
import { loadUsers, removeUser } from '../../store/users/action'
import NavBarFriends from "../navbar-friends/NavBarFriends";
import './style.css'

const ListUser = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const deleteUserFunction = (userId) => {
    const newUsers = users.users.filter(user => user.id !== userId)

    dispatch(removeUser(newUsers))
  }

  React.useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return (
    <div className='listWrapper'>
        <NavBarFriends/>
      <div className='listContainer'>
        {users.users.map(user => (
          <UserCard
            name={user.name}
            lastName={user.username}
            key={user.id}
            userPhrase={user.company.catchPhrase}
            onDeleteUser={() => deleteUserFunction(user.id)}
            userPhoto={`https://robohash.org/${user.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ListUser
