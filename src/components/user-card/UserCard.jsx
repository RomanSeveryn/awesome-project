import React from 'react'
import photoUser  from '../assets/image/photo.jpg'
import headerCard  from '../assets/image/background_user_card.svg'
import  './style.css'

const UserCard = props => {
  return (
    <div className='container'>
      <img className='header' src={headerCard}/>
      <div className=''>
        <img className='img' src={photoUser} alt='user image'/>
      </div>
      <div className='name'>
        <h2 className=''>{props.name}</h2>
        <h2 className=''>{props.surName}</h2>
      </div>
      <p className=''>{props.phrase}</p>
    </div>
  )
}

export default UserCard
