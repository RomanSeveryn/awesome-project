import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../user-card/UserCard'
import { loadUsers, removeUser } from '../../store/users/action'
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
      <div className='listContainer'>
        {users.users.map(user => (
          <UserCard
            name={user.name}
            surName={user.username}
            key={user.id}
            phrase={user.company.catchPhrase}
            deleteUser={() => deleteUserFunction(user.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ListUser
