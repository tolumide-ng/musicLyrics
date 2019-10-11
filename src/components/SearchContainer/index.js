import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SearchTrack from '../SearchTrack';

const SearchContainer = ({ searchStatus, searchResult, searchError }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center overflow-auto">
      {searchStatus === 'rest' && (
        <span className="text-blue-500">
          Search Articles by favorite article, title, or artist name
        </span>
      )}
      {searchStatus === 'pending' && <span>Loading</span>}
      {searchError === 'error' && <span>Please try again</span>}
      {searchStatus === 'success' && searchResult.length < 1 && (
        <span className="text-blue-500">
          Please try again, there is no content with such word
        </span>
      )}
      {searchStatus === 'success' &&
        searchResult.map(track => {
          const {
            track_id,
            commontrack_id,
            album_name,
            track_name,
            artist_name
          } = track.track;

          return (
            <SearchTrack
              key={track_id}
              trackId={track_id}
              albumName={album_name}
              commonTrackId={commontrack_id}
              trackName={track_name}
              artistName={artist_name}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  searchStatus: state.searchReducer.searchStatus,
  searchResult: state.searchReducer.searchResult,
  searchError: state.searchReducer.searchError
});

export default connect(
  mapStateToProps,
  null
)(SearchContainer);
