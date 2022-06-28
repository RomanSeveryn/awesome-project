import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../user-card/UserCard';
import { loadUsers, removeUser } from '../../store/users/action';
import NavBarFriends from '../navbar-friends/NavBarFriends';
import {
  dataNavBarPageFriends,
  informationAddFriends,
} from '../../utils/testData';
import './style.css';

const ListUser = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUserFunction = (userId) => {
    const newUsers = users.users.filter((user) => user.id !== userId);

    dispatch(removeUser(newUsers));
  };

  const toggleList = () => {
    setOpen((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClick = () => {
    console.log('LOG:: onButtonClick');
  };

  React.useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <div className="listWrapper">
      <NavBarFriends
        data={dataNavBarPageFriends}
        title="Управлять своей сетью контактов"
        isOpen={open}
        onShow={toggleList}
        adsImage="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAACeUyGWuWBhQQLyxe1gEMEaZgw.png"
        mainInformation={informationAddFriends}
        search={search}
        onChangeHandler={onChangeHandler}
        onClick={onButtonClick}
      />
      <div className="listContainer">
        {users.users.map((user) => (
          <UserCard
            name={user.name}
            lastName={user.username}
            key={user.id}
            userPhrase={user.company.catchPhrase}
            onDeleteUser={() => deleteUserFunction(user.id)}
            userPhoto={`https://robohash.org/${user.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ListUser;
