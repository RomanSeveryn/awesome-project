import React from 'react';
import './style.css';

export const AdsImage = ({ adsImage }) => {
  return (
    <>
      <div>
        <a href="#ads">
          <img className="navBarAdsImg" src={adsImage} alt="ads" />
        </a>
      </div>
    </>
  );
};
