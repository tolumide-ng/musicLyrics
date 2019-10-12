import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { allMusicAction } from '../../store/modules/allmusic/actions';
import Tracks from '../Tracks';

const TracksBox = ({
  fetchMusic,
  history,
  allFetchedMusic = [],
  allMusicStatus
}) => {
  useEffect(() => {
    fetchMusic({ history });
  }, []);

  return (
    <div className="w-full">
      {allMusicStatus === 'pending' && (
        <span className="text-center flex justify-center items-center">
          Loading...
        </span>
      )}
      {console.log('at this point >>>>>>', allFetchedMusic)}
      {allMusicStatus === 'success' && allFetchedMusic.length ? (
        allFetchedMusic.map(track => {
          const {
            track_id,
            track_name,
            artist_name,
            album_name,
            track_rating,
            commontrack_id
          } = track.track;
          return (
            <Tracks
              key={track_id}
              trackId={track_id}
              trackName={track_name}
              artistName={artist_name}
              albumName={album_name}
              trackRating={track_rating}
              commonTrackId={commontrack_id}
            />
          );
        })
      ) : (
        <span> Loading ... </span>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  allFetchedMusic: state.allMusicReducer.allMusic,
  allMusicStatus: state.allMusicReducer.allMusicStatus
});

const mapDispatchToProps = dispatch => ({
  fetchMusic: ({ history }) => dispatch(allMusicAction({ history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TracksBox);
