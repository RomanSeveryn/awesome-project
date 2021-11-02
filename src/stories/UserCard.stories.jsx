import React from 'react'
import UserCard from '../components/user-card/UserCard'

export default {
  title: 'User Card',
  component: UserCard
}

export const Usercard = () => {
  return <UserCard name='Roman Severyn' surName='Happy man' phrase='Good job' />
}
