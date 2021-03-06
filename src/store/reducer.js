import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/child/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as searchReducer } from "../pages/search/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  search: searchReducer,
});

export default cReducer;
