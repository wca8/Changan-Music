import { Map } from "immutable";

import * as actionTypes from "./constants";
const defaultState = Map({
  searchList: [],
  singerList: [],
  albumList: [],
  videoList: [],
  userList:[],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SEARCH_SONG:
      return state.set("searchList", action.searchList);
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.singerList);
    case actionTypes.CHANGE_ALBUM_LIST:
      return state.set("albumList", action.albumList);
    case actionTypes.CHANGE_VIDEO_LIST:
      return state.set("videoList", action.videoList);
    case actionTypes.CHANGE_USER_LIST:
      return state.set("userList", action.userList);
    default:
      return state;
  }
}

export default reducer;
