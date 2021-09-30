import { AlbumListWrapper } from "./style";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getKeywords } from "@/utils/search";
import { getSearchSongAction } from "@/pages/search/store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";
export default memo(function AlbumList(props) {
  const dispatch = useDispatch();
  let keywords = getKeywords(props);
  let type = 10;

  const { albumList } = useSelector(
    (state) => ({
      albumList: state.getIn(["search", "albumList"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getSearchSongAction(keywords, type));
  }, [dispatch]);
  return (
    <AlbumListWrapper>
      <div className="album-content">
        {albumList.map((item, index) => {
          return (
            <div key={item.id} className="singer-item">
              <div className='picImg'>
                <img src={getSizeImage(item.picUrl, 140)} alt="" />
                <div className='cover'></div>
              </div>
              <div className="name">
                <span>{item.name}</span>
              </div>
              <div className="name">
                <span>{item.artist.name}</span>
              </div>
            
            </div>
          );
        })}
      </div>
    </AlbumListWrapper>
  );
});
