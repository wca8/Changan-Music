import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  SongDetailWrapper,
  SongDetailLeftWrapper,
  SongDetailRightWrapper,
  SongDetailOtherWrapper,
} from "./style";
import { message } from "antd";
import {
  getSimiPlayListAction,
  getSongDetailAction,
  getfirstEntry,
} from "../store/actionCreators";

import {
  CheckCircleOutlined,
  DownOutlined,
  UpOutlined,
  BarsOutlined,
  PlayCircleOutlined,
  PlusCircleOutlined,
  SketchOutlined,
  RollbackOutlined,
  LeftCircleOutlined ,
} from "@ant-design/icons";

export default memo(function SongDetail(props) {
  const [liricNum, setliricNum] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const { lyricList, currentSong, simiPlayList, isPlaying, firstEntry } =
    useSelector(
      (state) => ({
        lyricList: state.getIn(["player", "lyricList"]),
        currentSong: state.getIn(["player", "currentSong"]),
        simiPlayList: state.getIn(["player", "simiPlayList"]),
        isPlaying: state.getIn(["player", "isPlaying"]),
        firstEntry: state.getIn(["player", "firstEntry"]),
      }),
      shallowEqual
    );

  // console.log(simiPlayList);
  const dispatch = useDispatch();

  useEffect(() => {
    setliricNum(lyricList.length / 4);
  }, [lyricList]);

  const bgImage =
    (currentSong.al && currentSong.al.picUrl + "?imageView&blur=40x20") ||
    (currentSong.al && currentSong.al.picUrl);

  const loadMoreClick = () => {
    if (isOpen) {
      setisOpen(false);
      setliricNum(lyricList.length / 4);
    } else {
      setisOpen(true);
      setliricNum(lyricList.length);
    }
  };

  useEffect(() => {
    dispatch(getSimiPlayListAction(currentSong.id));
  }, [currentSong]);

  const musicClick = (item) => {
    // 判断是否为VIP歌曲
    if (item.fee == 1) {
      message.warning({
        content: "该资源为VIP专享，开通VIP畅听无阻",
        icon: <SketchOutlined />,
      });
    } else {
      dispatch(getSongDetailAction(item.id));
    }
  };

  const rotateImgRef = useRef();

  useEffect(() => {
    isPlaying
      ? rotateImgRef.current.classList.add("rotate")
      : rotateImgRef.current.classList.remove("rotate");

    console.log("是否旋转----------", isPlaying);
  }, [isPlaying, currentSong]);

  const backClick=useCallback(()=>{
    props.history.go(-1)
  },[])

  return (
    <SongDetailWrapper bgImage={bgImage}>
      <SongDetailLeftWrapper>
        <div ref={rotateImgRef} className="Singer-pic Singer-bgc ">
          <div className="item">
            <img src={currentSong && currentSong.al.picUrl} alt="" />
          </div>
        </div>
      </SongDetailLeftWrapper>

      <SongDetailRightWrapper>
        <div className="song-info">
          <div className="name">
            <CheckCircleOutlined style={{ fontSize: "24px" }} />
            <h1>{currentSong.name}</h1>
          </div>
          <div className="singer">
            歌手：{currentSong && currentSong.ar[0].name}
          </div>
        </div>

        <div className="lyrics">
          {
          lyricList.length>0?(
            lyricList.slice(0, liricNum).map((item, index) => {
              return <div key={item.id} className="lyrics-item">{item.content}</div>;
            })
          ):(
            <div className="lyrics-item">纯音乐，无歌词</div>
          )
         
          }
          <div onClick={(e) => loadMoreClick()} className="load-more">
            {isOpen ? (
              <div>
                收起:
                <UpOutlined />
              </div>
            ) : (
              <div>
                展开:
                <DownOutlined />
              </div>
            )}
          </div>
        </div>
      </SongDetailRightWrapper>

      <SongDetailOtherWrapper>
        <div onClick={e=>backClick()} className="back">
          <LeftCircleOutlined />
        </div>
        <div className="title">
          <BarsOutlined style={{ fontSize: "20px" }} />
          <h2>相似歌曲</h2>
        </div>

        <div className="song-list">
          {simiPlayList.map((item, index) => {
            return (
              <div className="item">
                <div className="name">
                  <div className="song-name">{item.name}</div>
                  <div className="singer">
                    <div>{item.artists[0].name}</div>
                  </div>
                  <div className="fee">
                    {item.fee == 1 ? (
                      <div>
                        <SketchOutlined />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="play">
                  <PlayCircleOutlined onClick={(e) => musicClick(item)} />
                  <PlusCircleOutlined />
                </div>
              </div>
            );
          })}
        </div>
      </SongDetailOtherWrapper>
    </SongDetailWrapper>
  );
});
