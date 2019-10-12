import React from 'react';
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import './index.scss';

const Home = ({}) => {
  return (
    <div className="flex flex-row w-full md:w-11/12 mx-auto h-screen rounded-lg">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
