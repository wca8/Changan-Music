import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getToplistArtist,
  getRadioStation,
} from "@/services/recommend";

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums.slice(0, 10),
});

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

const changeToplistArtistAction = (res) => ({
  type: actionTypes.CHANGE_TOPLIST_ARTICLE,
  singerList: res.list.artists,
});

const changeRadioStationAction = (res) => ({
  type: actionTypes.CHANGE_RADIO_STATION,
  RadioList: res.result,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      // console.log(res);
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      console.log(res);
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case 19723756:
          console.log(res);
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          console.log(res);
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          console.log(res);
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};

export const getToplistArtistAction = (type) => {
  return (dispatch) => {
    getToplistArtist(type).then((res) => {
      // console.log(res);
      dispatch(changeToplistArtistAction(res));
    });
  };
};

export const getRadioStationAction = () => {
  return (dispatch) => {
    getRadioStation().then((res) => {
      dispatch(changeRadioStationAction(res));
    });
  };
};
