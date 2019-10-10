import React from 'react';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import './index.scss';

const Home = ({}) => {
  return (
    <div className="w-full bg-gray-300 py-6">
      <div className="flex flex-row w-11/12 mx-auto h-screen rounded-lg">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
