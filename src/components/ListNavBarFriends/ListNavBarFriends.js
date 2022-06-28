import React from 'react';
import { IconArrowDown, IconArrowUp } from '../assets/svg/icons';
import './style.css';

export const ListNavBarFriends = ({ data, title, isOpen, onShow }) => {
  return (
    <>
      <p className="paddingLeft">{title}</p>
      <ul className="listContainerFriends">
        {data.map((elem) => (
          <div
            key={elem.id}
            className={`linkWrapper hoverClass ${
              isOpen && elem.id !== 1 ? 'hiddenList' : ''
            }`}
          >
            <li className="list">
              <img
                className="listImage"
                src={elem.image}
                alt={`icon ${elem.item}`}
              />
              <a className="linkFriends" href={`/mynetwork/${elem.item}`}>
                {elem.item}
              </a>
            </li>
            <span>{elem.count}</span>
          </div>
        ))}
      </ul>
      <button className="buttonList hoverClass" onClick={onShow}>
        <span style={{ marginRight: '12px' }}>
          {isOpen ? 'Развернуть' : 'Свернуть'}
        </span>
        <div>{isOpen ? <IconArrowDown /> : <IconArrowUp />}</div>
      </button>
    </>
  );
};
