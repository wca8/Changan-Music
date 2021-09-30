import React, { memo } from "react";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

import TopBanner from "./child/topBanner";
import HotRecommend from "./child/hotRecommend";
import NewAlbum from "./child/newAlbum";
import Raking from "./child/recommendRaking";
import SingerList from './child/singerList';
import RadioStation from './child/radioStation'
export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <Raking></Raking>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </RecommendLeft>

        <RecommendRight>
           <SingerList></SingerList> 
           <RadioStation></RadioStation>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
