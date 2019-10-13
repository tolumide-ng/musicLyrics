import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { albumAction } from '../../store/modules/albums/actions';
import Trends from '../Trends';

const Trending = ({ fetchAlbum, history, albumTracks = [], albumStatus }) => {
  useEffect(() => {
    fetchAlbum({ history });
  }, []);

  return (
    <div className="invisible md:visible w-1/4 ml-4 overflow-auto">
      {albumTracks.length ? (
        albumTracks.map(album => {
          const {
            track_id,
            track_name,
            artist_name,
            track_rating,
            commontrack_id
          } = album.track;
          return (
            <Trends
              key={track_id}
              trackId={track_id}
              trackName={track_name}
              artistName={artist_name}
              trackRating={track_rating}
              commonTrackId={commontrack_id}
            />
          );
        })
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  albumTracks: state.albumReducer.album,
  albumStatus: state.albumReducer.albumStatus
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: ({ history }) => dispatch(albumAction({ history }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);
