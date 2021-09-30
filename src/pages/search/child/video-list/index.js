import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getKeywords } from "@/utils/search";
import { getSearchSongAction } from "@/pages/search/store/actionCreators";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { VideoListlWrapper } from "./style";

export default memo(function VideoList(props) {
  const dispatch = useDispatch();
  let keywords = getKeywords(props);
  let type = 1014;

  const { videoList } = useSelector(
    (state) => ({
      videoList: state.getIn(["search", "videoList"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getSearchSongAction(keywords, type));
  }, [dispatch]);
  return (
    <VideoListlWrapper>
      <div className="video-content">
        {videoList.map((item, index) => {
          return (
            <div key={item.id} className="singer-item">
              <div className="picImg">
                <img src={getSizeImage(item.coverUrl, 140)} alt="" />
                <div className="video-time">
                  {formatDate(item.durationms, "mm:ss")}
                </div>
              </div>
              <div className="name">
                <span className="isMV">
                  {
                    item.type==0?(
                    <span className='mv-tips'>mv</span>
                    ):(
                      ''
                    ) 
                  }
                </span>
                {item.title}
              </div>
              <div className="singer-name">
                <span className='text-overflow userName'>{item.creator[0].userName}</span>
                
              </div>
            </div>
          );
        })}
      </div>
    </VideoListlWrapper>
  );
});
