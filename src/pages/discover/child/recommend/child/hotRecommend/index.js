import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
    HotRecommendWrapper
} from './style'

import  ThemeHeaderRcm from '@/components/theme-header-rcm';
import  SongsCover from '@/components/songs-cover'
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';
import { getHotRecommendAction} from "../../store/actionCreators";
export default memo(function HotRecommend() {

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  console.log(hotRecommends);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch (getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title='热门推荐' keywords={['华语','民谣','电子']}></ThemeHeaderRcm>
      <div className="recommend-list">
        {
          hotRecommends.map((item,index)=>{
            return < SongsCover info={item} key={item.id}></ SongsCover>
          })
        }
      </div>
    
    </HotRecommendWrapper>
  )
})
