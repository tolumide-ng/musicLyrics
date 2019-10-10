import { combineReducers } from 'redux';
import allMusicReducer from './allmusic/reducer';
import albumReducer from './albums/reducer';
import lyricsReducer from './lyrics/reducer';
import labelReducer from './lyricsLabel/reducer';

const rootReducer = combineReducers({
  allMusicReducer,
  albumReducer,
  lyricsReducer,
  labelReducer
});

export default rootReducer;
