import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { lyricsAction } from '../../store/modules/lyrics/actions';
import Loading from '../Loading';

const SongLyrics = ({ match, fetchLyrics, musicLyrics = [], lyricsStatus }) => {
  useEffect(() => {
    const id = match.params.lyricsId;
    fetchLyrics({ history, id });
  }, []);

  return (
    <div className={'w-full md:w-3/4 ml-4'}>
      {lyricsStatus === 'error' && (
        <p className="text-red-500 mt-4 mx-auto text-center">
          Seems like there is an error, could you check your network and reload
          the page please? If the error persists, We probably do not have the
          lyrics to this song
        </p>
      )}
      {lyricsStatus === 'pending' && <Loading />}
      {lyricsStatus === 'success' && musicLyrics.length && (
        <div className="format">{musicLyrics}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    musicLyrics: state.lyricsReducer.lyrics,
    lyricsStatus: state.lyricsReducer.lyricsStatus
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLyrics: ({ history, id }) => dispatch(lyricsAction({ history, id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SongLyrics));
