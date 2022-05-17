import React from 'react'
import headerCard from '../assets/image/background_user_card.svg'
import './style.css'

const UserCard = props => {

  return (
    <div className='container'>
        <button className='deleteButton' onClick={props.deleteUser}>х</button>
        <img className='card-header' src={headerCard} alt='background card'/>
      <div className=''>
        <img className='img' src={props.photoUser} alt='user' />
      </div>
      <div className='name'>
        <h4 className=''>{props.name}</h4>
        <h4 className='surname'>{props.surName}</h4>
      </div>
      <p className='phrase'>{props.phrase}</p>
    </div>
  )
}

export default UserCard
