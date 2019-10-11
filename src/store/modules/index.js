import { combineReducers } from 'redux';
import allMusicReducer from './allmusic/reducer';
import albumReducer from './albums/reducer';
import lyricsReducer from './lyrics/reducer';
import labelReducer from './lyricsLabel/reducer';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
  allMusicReducer,
  albumReducer,
  lyricsReducer,
  labelReducer,
  searchReducer
});

export default rootReducer;
