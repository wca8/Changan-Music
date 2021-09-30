import { Map } from "immutable";

import * as actionTypes from "./constants";
const defaultState = Map({
  playList: [
   
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0,
  simiPlayList: [],
  isPlaying: false,
  firstEntry: true,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_SIMI_PLAY_LIST:
      return state.set("simiPlayList", action.simiPlayList);
    case actionTypes.CHANGE_IS_PLAYING_MUSIC:
      return state.set("isPlaying", action.isPlaying);
    case actionTypes.CHANGE_FIRST_ENTRY:
      return state.set("firstEntry", action.firstEntry);
    default:
      return state;
  }
}

export default reducer;
