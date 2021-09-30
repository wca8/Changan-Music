import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import  ThemeHeaderRcm from '@/components/theme-header-rcm';

import { getTopListAction } from '../../store/actionCreators';
import TopRanking from "@/components/top-ranking";
import {RankingWrapper} from './style'
export default memo(function Raking() {
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  return (
    <RankingWrapper >
       <ThemeHeaderRcm title='榜单'></ThemeHeaderRcm>
       <div className="tops">
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
