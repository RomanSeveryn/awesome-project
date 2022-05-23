import React from "react";
import './style.css'

export const FindNewFriends = ({mainInformation, search, onChangeHandler, onClick}) => {
    return (
        <>
            <div className='containerAddContacts'>
                <h5 className='addContactsHeading'>Добавить контакты</h5>

                <p className='contactsParagraph'>
                    {mainInformation}
                    <a className='contactsParagraphLink' href='/'>Подробнее</a>
                </p>

                <div>
                    <input className='navBarInput' value={search} onChange={onChangeHandler} placeholder='test@gmail.com'/>
                </div>

                <button className='navBarButton' onClick={onClick}>Продолжить</button>

                <div className='navBarLinkMore'>
                    <a href='/'>Еще</a>
                </div>
            </div>
        </>
    )
}
