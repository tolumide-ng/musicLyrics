import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchAction } from '../../store/modules/search/actions';

const SearchPanel = ({ searchAction }) => {
  const [searchVal, setSearchVal] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (searchVal.length < 1) {
      setError('Please enter a value');
      return;
    }
    searchAction({ searchQuery: searchVal });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        className=""
        onSubmit={handleSubmit}
        className="w-10/12 border border-gray-500"
      >
        <input
          type="text"
          placeholder="Search by artist, title, or track title "
          className="border w-7/12 outline-none md:w-9/12 p-1"
          value={searchVal}
          onChange={e => {
            setSearchVal(e.target.value);
            setError('');
          }}
        />
        <button
          type="submit"
          className="w-5/12 md:w-3/12 bg-indigo-800 hover:bg-indigo-600 text-white  outline-none p-1"
        >
          Search
        </button>
      </form>
      <span className="text-red-600">{error}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  searchAction: ({ searchQuery }) => dispatch(searchAction({ searchQuery }))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchPanel);
