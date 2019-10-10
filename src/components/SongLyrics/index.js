import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { lyricsAction } from '../../store/modules/lyrics/actions';

const SongLyrics = ({ match, fetchLyrics, musicLyrics = [], lyricsStatus }) => {
  useEffect(() => {
    const id = match.params.lyricsId;
    fetchLyrics({ history, id });
  }, []);
  return (
    <div className={'w-3/4 ml-4'}>
      {musicLyrics.length ? musicLyrics : <span>Loading...</span>}
    </div>
  );
};

const mapStateToProps = state => ({
  musicLyrics: state.lyricsReducer.lyrics.lyrics_body,
  lyricsStatus: state.lyricsReducer.lyricsStatus
});

const mapDispatchToProps = dispatch => ({
  fetchLyrics: ({ history, id }) => dispatch(lyricsAction({ history, id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SongLyrics));
