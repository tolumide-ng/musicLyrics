import React from 'react';
import { labelAction } from '../../store/modules/lyricsLabel/actions';
import { lyricsAction } from '../../store/modules/lyrics/actions';
import { connect } from 'react-redux';
import uparrow from '../../assets/images/uparrow.png';

const Trends = ({
  trackId,
  trackName,
  artistName,
  trackRating,
  commonTrackId,
  fetchLyrics,
  fetchLabel
}) => {
  const takeIt = () => {
    fetchLyrics({ history, id: trackId });
    fetchLabel({ history, id: trackId });
  };
  return (
    <div
      className="flex items-center mt-2 p-2 cursor-pointer hover:bg-indigo-100 rounded"
      onClick={takeIt}
    >
      <img src={uparrow} alt="music going up" className="h-3 mr-2" />
      <p className="mr-4">{trackRating}</p>
      <div className="antialiased">
        <p className="text-sm">{trackName}</p>
        <p className="text-gray-700 text-xs">By: {artistName}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchLyrics: ({ history, id }) => dispatch(lyricsAction({ history, id })),
  fetchLabel: ({ history, id }) => dispatch(labelAction({ history, id }))
});

export default connect(
  null,
  mapDispatchToProps
)(Trends);
