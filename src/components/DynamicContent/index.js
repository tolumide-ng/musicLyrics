import React from 'react';
import Tracks from '../Tracks';
import Trending from '../Trending';
import shuffle from '../../assets/images/shuffle.png';
import more from '../../assets/images/more.png';

const DynamicContent = ({}) => {
  return (
    <div className="w-full flex pl-4 mt-4">
      <div className="w-4/5 mr-4">
        <div className="w-full flex flex-col mb-6">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold tracking-wide anitialized">
                Favourites
              </h3>
              <p className="text-xs">43 Songs Updated yesterday</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm mr-2">Shuffle All</div>
              <img src={shuffle} alt="shuffle icon" className="h-4 mr-4" />
              <img src={more} alt="more icon" className="h-4 mr-1" />
            </div>
          </div>
        </div>
        <Tracks />
        <Tracks />
        <Tracks />
        <Tracks />
      </div>
      <Trending />
    </div>
  );
};

export default DynamicContent;

// rgba(35, 89, 173, 1)
