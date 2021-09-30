import { Map } from "immutable";
import * as actionTypes from "./constants";

// const defaultState ={
//     topBanners: [],

// };

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  singerList:[],
  RadioList:[]
});

// function reducer(state = defaultState, action) {
//     switch (action.type) {
//         case actionTypes.CHANGE_TOP_BANNERS:
//             return {...state,topBanners:action.topBanners}
//         default:
//             return state;
//     }
// }
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case actionTypes.CHANGE_TOPLIST_ARTICLE:
      return state.set("singerList",action.singerList)
      case actionTypes.CHANGE_RADIO_STATION:
        return  state.set("RadioList",action.RadioList);
    default:
      return state;
  }
}

export default reducer;
