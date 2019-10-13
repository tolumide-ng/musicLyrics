import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/images/notfound.png';

const PageNotFound = ({}) => {
  return (
    <div className="flex flex-col mt-6 justify-center items-center">
      <p>
        Page Not Found, Let's take you back{' '}
        <Link
          to="/"
          className="bg-indigo-800 hover:bg-indigo-600 p-1 rounded text-white cursor-pointer"
        >
          Home
        </Link>{' '}
      </p>
      <img src={notfound} alt="page npt found" />
    </div>
  );
};

export default PageNotFound;
