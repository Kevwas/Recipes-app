import React from 'react';
import Tilt from 'react-tilt';
import Chef from './Logo2.png';
import "./Logo.css";

const Logo = () => {
  return (
    <div className='mt4 tc center mt0'>
      <Tilt className="Tilt mw5 center pa3 Tilt tc pa3 ma0 bt4 br0 bt0 shadow-2" options={{ max : 35 }} style={{ height: 200, width: 150 }} >
        <div className="Tilt-inner pa2">
          <img style={{paddingBottom: '5px'}} alt='logo' src={Chef}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;