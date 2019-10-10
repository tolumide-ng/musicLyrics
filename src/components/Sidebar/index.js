import React from 'react';
import { Link } from 'react-router-dom';
import artist from '../../assets/images/artist.png';
import favourite from '../../assets/images/favourite.png';
import search from '../../assets/images/search.png';
import playlist from '../../assets/images/playlist.png';
import album from '../../assets/images/album.png';
import avatar from '../../assets/images/avatar.png';

const SideBar = ({}) => {
  return (
    <div className="bg-indigo-500 flex flex-col rounded-lg p-2 w-2/12">
      <div className="h-40 rounded-tl-lg justify-center flex flex-col items-center">
        <img src={avatar} alt="avatar" className="h-16 w-16" />
        <p className="mt-2">First Lastname</p>
      </div>
      <div className="flex flex-col">
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={search} alt="search" className="h-4 mr-4" />
          <p>Search</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={favourite} alt="favourite music" className="h-4 mr-4" />
          <p>Favourite</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={playlist} alt="music playlist" className="h-4 mr-4" />
          <p>Playlist</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={artist} alt="music by artist" className="h-4 mr-4" />
          <p>Artist</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={album} alt="music by album" className="h-4 mr-4" />
          <p>Album</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
