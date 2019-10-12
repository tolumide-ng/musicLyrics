import React from 'react';
import { Link } from 'react-router-dom';
import vinyl from '../../assets/images/vinyl.png';

const SearchTrack = ({
  trackId,
  albumName,
  commonTrackId,
  trackName,
  artistName
}) => {
  return (
    <Link
      className="border border-gray-300 w-full md:w-1/3 flex flex-col items-center p-4 shadow-md m-4"
      to={`/lyrics/${trackId}/${commonTrackId}`}
    >
      <img className="h-32 w-32" src={vinyl} alt="music cover" />
      <div className="flex flex-col self-start mt-2 text-xs">
        <p>
          <strong> Song Title: </strong>
          {trackName}
        </p>
        <p>
          <strong>Artist Name:</strong> {artistName}
        </p>
        <p>
          <strong>Album name:</strong> {albumName}
        </p>
      </div>
    </Link>
  );
};

export default SearchTrack;
