import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { labelAction } from '../../store/modules/lyricsLabel/actions';

const LyricsLabel = ({ match, fetchLabel, musicInfo = [], labelStatus }) => {
  useEffect(() => {
    const id = match.params.commonTrackId;

    fetchLabel({ history, id });
  }, []);

  return (
    <div className="mb-4 flex mt-4 ml-4 bottom-border pb-2 items-center justify-center">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap md:flex-no-wrap">
          <strong className="pr-4 md:pr-0">Album Name:</strong>
          <p>{musicInfo ? musicInfo.album_name : 'N/A'}</p>
        </div>
        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap md:flex-no-wrap">
          <strong className="pr-4 md:pr-0">Artist Name:</strong>
          <p>{musicInfo ? musicInfo.artist_name : 'N/A'}</p>
        </div>
        <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-wrap md:flex-no-wrap">
          <strong className="pr-4 md:pr-0">Track Name:</strong>
          <p>{musicInfo ? musicInfo.track_name : 'N/A'}</p>
        </div>
      </div>
      <h3 className="invisible md:visible font-bold tracking-wide anitialized  w-1/4">
        Trending Album
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    musicInfo: state.labelReducer.label,
    labelStatus: state.labelReducer.labelStatus
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLabel: ({ history, id }) => dispatch(labelAction({ history, id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LyricsLabel));
