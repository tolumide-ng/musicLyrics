import React from 'react';
import pageCover from '../../assets/images/musiccard.png';
import HomeHeader from '../HomeHeader';
import TracksBox from '../TracksBox';

const Content = ({}) => {
  return (
    <div className="w-full md:w-10/12 flex flex-col bg-white">
      <img src={pageCover} className="w-full h-64 object-cover" />
      <HomeHeader />
      <div className="w-full lg:w-4/5 flex flex-col overflow-auto pl-4 pr-4 lg:pr-0">
        <TracksBox />
      </div>
    </div>
  );
};

export default Content;
