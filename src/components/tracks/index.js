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
      className="flex p-2 w-full items-center hover:shadow-lg mb-2 py-4 bottom-border"
      to={`/lyrics/${trackId}/${commonTrackId}`}
    >
      <div className="w-2/4 flex items-center">
        <img src={disc} className="h-10" />
        <div className="w-10/11 ml-2 flex flex-col justify-center">
          <p className="text-base font-bold">{trackName}</p>
          <p className="text-sm text-gray-600">{artistName}</p>
        </div>
      </div>
      <h3 className="w-1/4">{albumName}</h3>
      <h3 className="w-1/4 text-center">{trackRating}</h3>
    </Link>
  );
};

export default Tracks;
