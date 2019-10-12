import React from 'react';
import { Link } from 'react-router-dom';
import disc from '../../assets/images/music.png';

const Tracks = ({
  trackId,
  trackName,
  artistName,
  albumName,
  trackRating,
  commonTrackId
}) => {
  return (
    <Link
      className="flex flex-col md:flex-row p-2 w-full md:items-center hover:shadow-lg shdow-md md:shadow-none mb-2 md:py-4 border md:border-none bottom-border items-center"
      to={`/lyrics/${trackId}/${commonTrackId}`}
    >
      <div className="w-full md:w-2/4 flex flex-col md:flex-row items-center">
        <img src={disc} className="h-10" />
        <div className="w-10/11 ml-2 flex flex-col justify-center md:items-start items-center">
          <p className="text-base font-bold text-center md:text-start">
            {trackName}
          </p>
          <p className="text-sm text-gray-600 text-center md:text-start">
            {artistName}
          </p>
        </div>
      </div>
      <h3 className="w-full md:w-1/4 text-center md:text-start">{albumName}</h3>
      <h3 className="w-full md:w-1/4 text-center">{trackRating}</h3>
    </Link>
  );
};

export default Tracks;
