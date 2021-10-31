import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <div className='link-linkedin'>
              <Link>
                <img src={linkedinIcon} />
              </Link>
            </div>

            <div className='input-search'>
              <input placeholder='Поиск' className='input-header'/>
            </div>
          </div>
          <ul className='nav-list'>
            <li className='header-link'>
              <NavLink exact to='/' activeClassName={'active'}>
                <div className='wrapper-link'>
                  <img className='image-header' src={homeIcon} />
                  <span className='name-link'>Главная</span>
                </div>
              </NavLink>
            </li>
            <li className='header-link'>
              <NavLink to='/mynetwork' activeClassName={'active'}>
                <div className='wrapper-link'>
                  <img className='image-header' src={friendsIcon} />
                  <span className='name-link'>Сеть</span>
                </div>
              </NavLink>
            </li>
            <li className='header-link'>
              <NavLink to='/vacancies' activeClassName={'active'}>
                <div className='wrapper-link'>
                  <img className='image-header' src={vacanciesIcon} />
                  <span className='name-link'>Вакансии</span>
                </div>
              </NavLink>
            </li>
            <li className='header-link'>
              <NavLink to='/messages' activeClassName={'active'}>
                <div className='wrapper-link'>
                  <img className='image-header' src={messagesIcon} />
                  <span className='name-link'>Сообщения</span>
                </div>
              </NavLink>
            </li>
            <li className='header-link'>
              <NavLink to='/notifications' activeClassName={'active'}>
                <div className='wrapper-link'>
                  <img className='image-header' src={notifitationsIcon} />
                  <span className='name-link'>Уведомления</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
