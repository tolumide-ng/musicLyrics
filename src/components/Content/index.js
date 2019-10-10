import React from 'react';
import pageCover from '../../assets/images/musiccard.png';
import DynamicContent from '../DynamicContent';

const Content = ({}) => {
  return (
    <div className="w-10/12 flex flex-col h-full bg-white">
      <img src={pageCover} className="w-full h-64 object-cover" />
      <DynamicContent />
    </div>
  );
};

export default Content;
