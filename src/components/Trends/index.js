import React from 'react';
import uparrow from '../../assets/images/uparrow.png';
import downarrow from '../../assets/images/downarrow.png';

const Trends = ({}) => {
  return (
    <div className="flex items-center mt-2">
      <img src={uparrow} alt="music going up" className="h-3 mr-2" />
      <p className="mr-2">3</p>
      <div className="antialiased">
        <p className="text-sm">Song Name</p>
        <p className="text-gray-400 text-xs">Artist and Artiost</p>
      </div>
    </div>
  );
};

export default Trends;
