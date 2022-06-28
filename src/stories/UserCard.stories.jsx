import React from 'react';
import UserCard from '../components/user-card/UserCard';
import photo from '../components/assets/image/photo.jpg';

export default {
  title: 'User Card',
  component: UserCard,
};

export const Usercard = () => {
  return (
    <UserCard
      name="Roman Severyn"
      lastName="Happy man"
      userPhrase="Good job"
      userPhoto={photo}
    />
  );
};
