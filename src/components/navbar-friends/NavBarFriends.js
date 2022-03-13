import React, { useState } from "react";
import { dataNavBarPageFriends } from "../../utils/testData";
import { IconArrowDown, IconArrowUp } from "../assets/svg/icons";
import './style.css'

const NavBarFriends = () => {
    const [state, setState] = useState(false)
    const toggleList = () => {
        setState(prev => !prev);
    }

    return (
        <div className='containerNavBarFriends'>
            <p className='paddingLeft'>Управлять своей сетью контактов</p>
            <ul className='listContainerFriends'>
                {
                    dataNavBarPageFriends.map((elem) =>
                        <div key={elem.id} className={`linkWrapper hoverClass ${state && elem.id !== 1 ? 'hiddenList' : ''}`}>
                            <li  className='list'>
                                <img className='listImage' src={elem.image} alt={`icon ${elem.item}`}/>
                                <a className='linkFriends' href={`/mynetwork/${elem.item}`}>{elem.item}</a>
                            </li>
                            <span>{elem.count}</span>
                        </div>
                    )
                }
            </ul>
            <button className='buttonList hoverClass' onClick={toggleList}>
                <span style={{marginRight: '12px'}}>{state ? 'Развернуть' : 'Свернуть'}</span>
                <div>
                    {state ? <IconArrowDown/> : <IconArrowUp/>}
                </div>
            </button>
            <hr className='borderNavBarFriends'/>
        </div>
    )
}

export default NavBarFriends;
