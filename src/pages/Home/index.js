import React from 'react';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <div className="w-full bg-gray-300 h-screen py-6">
      <div className="flex flex-row w-11/12 mx-auto h-full rounded-lg">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
