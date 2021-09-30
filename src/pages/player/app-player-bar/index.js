import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { Slider, Switch } from "antd";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { NavLink } from "react-router-dom";

import { getSongDetail } from "@/services/player";
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
  getIsPlayimgMusic,
} from "../store/actionCreators";

import { message } from "antd";

export default memo(function PlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [lyricsContent, setlyricsContent] = useState("");
  // redux hook
  const { currentSong, sequence, lyricList, currentLyricIndex, isPlaying } =
    useSelector(
      (state) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        isPlaying: state.getIn(["player", "isPlaying"]),
      }),
      shallowEqual
    );
 
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getSongDetailAction(174944));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        dispatch(getIsPlayimgMusic(true));
      })
      .catch((err) => {
        dispatch(getIsPlayimgMusic(false));
      });
  
  }, [currentSong]);

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  // other hooks
  const audioRef = useRef();

  const playMusic = useCallback(() => {
    
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    dispatch(getIsPlayimgMusic(!isPlaying));

  }, [isPlaying]);

  const timeUpdate = (e) => {
    // console.log(e.target.currentTime);
    // 毫秒

    const currentTime = e.target.currentTime * 1000;
    if (!isChanging) {
      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100);
    }

    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime < lyricItem.time) {
        break;
      }
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content;
      setlyricsContent(content);
    }
  };

  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };

  const sliderChange = useCallback(
    (value) => {
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setIsChanging(true);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeMusic = (tag) => {
    dispatch(getIsPlayimgMusic(false));
    dispatch(changeCurrentIndexAndSongAction(tag));
  };

  return (
    <PlaybarWrapper>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        
        <PlayInfo>
          <div className="image">
            <NavLink to={"/discover/songDetail?id="+currentSong.id+"©ChangAnMusic"}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>

          <div className="info">
            <div className="song">
              <span className="song-name">{singerName}</span>
              <a href="#" className="singer-name">
                {currentSong.name}
              </a>
              <div className="lyricsContent">{lyricsContent}</div>
            </div>

            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider"></span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded()}
      />
    </PlaybarWrapper>
  );
});
