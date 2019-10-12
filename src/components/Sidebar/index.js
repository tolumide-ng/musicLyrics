import React from 'react';
import { Link } from 'react-router-dom';
import artist from '../../assets/images/artist.png';
import favourite from '../../assets/images/favourite.png';
import search from '../../assets/images/search.png';
import home from '../../assets/images/home.png';
import playlist from '../../assets/images/playlist.png';
import album from '../../assets/images/album.png';
import avatar from '../../assets/images/avatar.png';

const SideBar = ({}) => {
  return (
    <div className="bg-indigo-400 flex flex-col rounded-l-sm p-4 w-2/12 hidden lg:block">
      <div className="h-40 rounded-tl-lg justify-center flex flex-col items-center">
        <img src={avatar} alt="avatar" className="h-16 w-16" />
        <p className="mt-2 text-white">First Lastname</p>
      </div>
      <div className="flex flex-col">
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={home} alt="search" className="h-5 mr-4" />
          <p className="text-white">Home</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/search">
          <img src={search} alt="favourite music" className="h-4 mr-4" />
          <p className="text-white">Search</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={playlist} alt="music playlist" className="h-4 mr-4" />
          <p className="text-white">Playlist</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={artist} alt="music by artist" className="h-4 mr-4" />
          <p className="text-white">Artist</p>
        </Link>
        <Link className="flex justify-start items-center mb-6" to="/">
          <img src={album} alt="music by album" className="h-4 mr-4" />
          <p className="text-white">Album</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
