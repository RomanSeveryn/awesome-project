import React from 'react';
import headerCard from '../assets/image/background_user_card.svg';
import './style.css';

const UserCard = ({ name, lastName, userPhrase, userPhoto, onDeleteUser }) => {
  return (
    <div className="container">
      <button className="deleteButton" onClick={onDeleteUser}>
        х
      </button>
      <img className="card-header" src={headerCard} alt="background card" />
      <div className="">
        <img className="img" src={userPhoto} alt="user" />
      </div>
      <div className="name">
        <h4 className="">{name}</h4>
        <h4 className="lastName">{lastName}</h4>
      </div>
      <p className="userPhrase">{userPhrase}</p>
    </div>
  );
};

export default UserCard;
