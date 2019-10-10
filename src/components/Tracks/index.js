import React from 'react';
import disc from '../../assets/images/music.png';

const Tracks = ({}) => {
  return (
    <div className="flex p-2 w-full items-center shadow-lg mb-2">
      <div className="w-1/4 flex items-center">
        <img src={disc} className="h-10" />
        <div className="w-10/11 ml-2 flex flex-col justify-center items-center">
          <h2>Trackname</h2>
          <h3 className="mt-1">Artistname</h3>
        </div>
      </div>
      <h3 className="w-1/4">Album</h3>
      <h3 className="w-1/4">Genre</h3>
    </div>
  );
};

export default Tracks;
