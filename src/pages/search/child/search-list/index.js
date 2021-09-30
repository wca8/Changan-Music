import React, { memo ,useEffect} from "react";
import { SearchListWrapper } from "./style";
import { getSongDetailAction } from "@/pages/player/store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { PlayCircleOutlined, SketchOutlined } from "@ant-design/icons";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { message } from "antd";
import { getKeywords } from "@/utils/search";
import { getSearchSongAction } from "@/pages/search/store/actionCreators";

export default memo(function SearchList(props) {
  const dispatch = useDispatch();
  let keywords = getKeywords(props);
  let type = 1;
  
  const { searchList } = useSelector(
    (state) => ({
      searchList: state.getIn(["search", "searchList"]),
    }),
    shallowEqual
  );
 
  useEffect(() => {
    dispatch(getSearchSongAction(keywords, type));
  }, [dispatch])

  const PlayMusicClick = (id, fee) => {
    console.log("播放");
    if (fee == 1) {
      message.warning({
        content: "该资源为VIP专享，开通VIP畅听无阻",
        icon: <SketchOutlined />,
      });
    } else {
      dispatch(getSongDetailAction(id));
    }
  };
  return (
    <SearchListWrapper>
      {searchList.slice(0, 20).map((item) => {
        return (
          <div
            onClick={(e) => PlayMusicClick(item.id, item.fee)}
            key={item.id}
            className="item"
          >
            <div>
              <PlayCircleOutlined />
            </div>
            <div className="name">
              {item.name}
              {item.fee == 1 ? (
                <div className="fee">
                  <SketchOutlined />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="singer">{item.ar[0].name}</div>
            <div className="album">{item.al.name}</div>
            <div className="time">{formatDate(item.dt || 0, "mm:ss")}</div>
          </div>
        );
      })}
    </SearchListWrapper>
  );
});
