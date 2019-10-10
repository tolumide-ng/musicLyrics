import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import SongLyrics from '../../components/SongLyrics';
import Trending from '../../components/Trending';
import LyricsPageLabel from '../../components/LyricsPageLabel';
import lyricspage from '../../assets/images/lyricspage.png';

const LyricsPage = ({ match }) => {
  return (
    <div className="w-full bg-gray-300 py-6">
      <div className="flex flex-row w-11/12 mx-auto h-screen rounded-lg">
        <Sidebar />
        <div className="w-full flex flex-col bg-white">
          <img src={lyricspage} className="w-full h-64 object-cover" />
          <LyricsPageLabel />
          <div className="w-full flex overflow-auto">
            <SongLyrics />
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LyricsPage;
