import React, { useState } from "react";
import { dataNavBarPageFriends } from "../../utils/testData";
import { IconArrowDown, IconArrowUp } from "../assets/svg/icons";
import './style.css'

const NavBarFriends = () => {
    const [state, setState] = useState(false)
    const [value, setValue] = useState('')

    const toggleList = () => {
        setState(prev => !prev);
    }

    const onChangeHandler = (e) => {
        setValue(e.target.value)
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

            <div>
                <a href='#ads'>
                    <img className='navBarAdsImg' src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png' alt='ads'/>
                </a>
            </div>

            <hr className='borderNavBarFriends'/>

            <div>
                <div className='containerAddContacts'>
                    <h5 className='addContactsHeading'>Добавить контакты</h5>

                    <p className='contactsParagraph'>Сведения о ваших контактах будут периодически импортированы и сохранены,
                        чтобы помочь вам и другим участникам устанавливать контакт. Вы выбираете,
                        с кем установить контакт и кому отправить приглашение.
                        <a className='contactsParagraphLink'>Подробнее</a>
                    </p>

                    <div>
                        <input className='navBarInput' value={value} onChange={onChangeHandler} placeholder='test@gmail.com'/>
                    </div>

                    <button className='navBarButton'>Продолжить</button>

                    <div className='navBarLinkMore'>
                        <a href=''>Еще</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavBarFriends;
