import { getSearchSong } from "@/services/search";

import * as actionTypes from "./constants";

const changeSearchSongAction = (searchList) => ({
  type: actionTypes.CHANGE_SEARCH_SONG,
  searchList,
});

const changeSingerListAction = (singerList) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  singerList,
});

const changeAlbumListAction = (albumList) => ({
  type: actionTypes.CHANGE_ALBUM_LIST,
  albumList,
});

const changeVideoListAction = (videoList) => ({
  type: actionTypes.CHANGE_VIDEO_LIST,
  videoList,
});

const changeUserListAction = (userList) => ({
  type: actionTypes.CHANGE_USER_LIST,
  userList,
});
export const getSearchSongAction = (keywords, type) => {
  return (dispatch) => {
    getSearchSong(keywords, type).then((res) => {
      switch(type){
        case 1:dispatch(changeSearchSongAction(res.result.songs));break;
        case 10:dispatch(changeAlbumListAction(res.result.albums));break;
        case 100:dispatch(changeSingerListAction(res.result.artists));break;
        case 1002:dispatch(changeUserListAction(res.result.userprofiles));break; 
        case 1014:dispatch(changeVideoListAction(res.result.videos));break; 
     
      }
      console.log(res);
      
    });
  };
};
