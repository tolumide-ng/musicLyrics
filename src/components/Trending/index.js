import React from 'react';
import Trends from '../Trends';
import trend from '../../assets/images/albumcover.png';

const Trending = ({}) => {
  return (
    <div className="w-1/5">
      <h3 className="font-bold tracking-wide anitialized mb-4">Now Trending</h3>
      <img src={trend} alt="Trending Album wall paper" className="h-28 pr-4" />
      <Trends />
    </div>
  );
};

export default Trending;
