import preloader from './../../../assets/svg/preloader.svg'
import React from 'react'

let preload = () => {
  return (
    <div style={{ backgroundColor: 'whitesmoke', }}>
      <img src={preloader} alt='#' />
    </div>
  );
};


export default preload;
