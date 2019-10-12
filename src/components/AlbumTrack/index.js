import React from 'react';
// import Tracks from '../Tracks';
import Trends from '../Trends';

const AlbumTrack = ({}) => {
  return (
    <div className="w-full">
      <h3 className="font-bold tracking-wide anitialized mb-4">
        Trending Albums
      </h3>
      <img src={trend} alt="Trending Album wall paper" className="h-28 pr-4" />
      <Trends />
    </div>
  );
};

export default AlbumTrack;
