import React from 'react';
import Sidebar from '../../components/Sidebar';
import SearchPanel from '../../components/SearchPanel';
import SearchContainer from '../../components/SearchContainer';

const SearchPage = ({}) => {
  return (
    <div className="w-full bg-gray-300 py-6">
      <div className="flex flex-row w-11/12 mx-auto h-screen rounded-lg">
        <Sidebar />
        <div className="w-10/12 flex flex-col bg-white p-4">
          <div>
            <SearchPanel />
          </div>
          <div className="mt-6 w-full overflow-auto flex">
            <SearchContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
