import React, { useState } from "react";
import { dataNavBarPageFriends } from "../../utils/testData";
import './style.css'

const NavBarFriends = () => {
    const [state, setState] = useState(false)
    const toggleList = () => {
        setState(prev => !prev);
    }

    return (
        <div className='containerNavBarFriends'>
            <p>Управлять своей сетью контактов</p>
            <ul className='listContainerFriends'>
                {
                    dataNavBarPageFriends.map((elem) =>
                        <li key={elem.id} className={`list ${state ? elem.id !== 1 ? 'hiddenList' : '' : ''}`}>
                            <a href={`/mynetwork/${elem.item}`}>{elem.item}</a>
                        </li>
                    )
                }
            </ul>
            <button className='buttonList' onClick={toggleList}>Свернуть</button>
        </div>
    )
}

export default NavBarFriends;
