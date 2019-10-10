import React from 'react';
import shuffle from '../../assets/images/shuffle.png';
import more from '../../assets/images/more.png';

const HomeHeader = ({}) => {
  return (
    <div className="w-4/5 flex justify-between my-4 z-40 ml-4">
      <div>
        <h3 className="font-bold tracking-wide anitialized">Popular Tracks</h3>
        <p className="text-xs">43 Songs Updated yesterday</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-sm mr-2">Shuffle All</div>
        <img src={shuffle} alt="shuffle icon" className="h-4 mr-4" />
        <img src={more} alt="more icon" className="h-4 mr-1" />
      </div>
    </div>
  );
};

export default HomeHeader;
