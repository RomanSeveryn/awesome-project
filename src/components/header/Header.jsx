import React from 'react'
import { Link } from 'react-router-dom'
import linkedinIcon from '../assets/image/linkedin.png'
import homeIcon from '../assets/image/home.png'
import friendsIcon from '../assets/image/friends.png'
import vacanciesIcon from '../assets/image/vacancies.png'
import messagesIcon from '../assets/image/messages.png'
import notifitationsIcon from '../assets/image/notifications.png'

import './style.css'

const Header = () => {
  return (
    <div className='container-header'>
      <header className='header'>
        <div className='wrapper-header'>
          <div className='container-header-input'>
            <Link>
              <img src={linkedinIcon} />
            </Link>
            <input />
          </div>
          <ul className='nav-list'>
            <li className='header-link'>
              <Link to='/'>
                <div className='wrapper-link'>
                  <img className='image-header black' src={homeIcon} />
                  <span className='name-link'>Главная</span>
                </div>
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/mynetwork'>
                <div className='wrapper-link'>
                  <img className='image-header' src={friendsIcon} />
                  <span className='name-link'>Сеть</span>
                </div>
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/'>
                <div className='wrapper-link'>
                  <img className='image-header' src={vacanciesIcon} />
                  <span className='name-link'>Вакансии</span>
                </div>
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/'>
                <div className='wrapper-link'>
                  <img className='image-header' src={messagesIcon} />
                  <span className='name-link'>Сообщения</span>
                </div>
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/'>
                <div className='wrapper-link'>
                  <img className='image-header' src={notifitationsIcon} />
                  <span className='name-link'>Уведомления</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
