import React from "react";
import {ListNavBarFriends} from "../ListNavBarFriends/ListNavBarFriends";
import {AdsImage} from "../adsImage/AdsImage";
import {FindNewFriends} from "../findNewFriends/FindNewFriends";
import './style.css'

const NavBarFriends = ({
    data,
    title,
    isOpen,
    onShow,
    adsImage,
    mainInformation,
    search,
    onChangeHandler,
    onClick,
}) => {
    return (
        <div className='containerNavBarFriends'>
            <ListNavBarFriends
            data={data}
            onShow={onShow}
            isOpen={isOpen}
            title={title}
            />
            <hr className='borderNavBarFriends'/>
            <AdsImage adsImage={adsImage}/>
            <hr className='borderNavBarFriends'/>
            <FindNewFriends
                mainInformation={mainInformation}
                search={search}
                onChangeHandler={onChangeHandler}
                onClick={onClick}
            />
        </div>
    )
}

export default NavBarFriends;
