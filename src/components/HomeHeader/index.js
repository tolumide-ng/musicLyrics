import React from 'react';
import shuffle from '../../assets/images/shuffle.png';
import more from '../../assets/images/more.png';

const HomeHeader = ({}) => {
  return (
    <div className="w-full lg:w-4/5 flex flex-col my-4 z-40 pl-4 pr-4 lg:pr-0">
      <div className="w-full flex flex-col md:flex-row items-start md:justify-between">
        <div className="">
          <h3 className="font-bold tracking-wide anitialized">
            Popular Tracks
          </h3>
          <p className="text-xs text-gray-500">43 Songs Updated yesterday</p>
        </div>
        <div className="flex items-center justify-center mt-4 lg:mt-0">
          <div className="text-sm mr-2">Shuffle All</div>
          <img src={shuffle} alt="shuffle icon" className="h-4 mr-4" />
          <img src={more} alt="more icon" className="h-4 mr-1" />
        </div>
      </div>
      <div className="invisible md:visible w-full flex items-center justify-between mt-4 bottom-border">
        <p className="w-2/4 text-gray-500">Track</p>
        <p className="w-1/4 text-gray-500 text-center">Album</p>
        <p className="w-1/4 text-center text-gray-500">Rating</p>
      </div>
    </div>
  );
};

export default HomeHeader;
