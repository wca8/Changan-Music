import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  TopRankingWrapper,
  SearchBarWrapper,
  ContentListWrapper,
} from "./style";

import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { getSearchSongAction } from "@/pages/search/store/actionCreators";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import { tabControl } from "@/common/local-data";
import LocalCache from '@/utils/localstorage'
import { message } from 'antd';
const { Search } = Input;

export default memo(function SongSearch(props) {
  const { route } = props;
  const dispatch = useDispatch();
  let history = useHistory();

  let arr = props.location.search.split("=");
  let res = decodeURI(arr[1]);


  if(props.location.search==''){
    res=LocalCache.getCache('keywords')
  }else{
    LocalCache.setCache('keywords',res)
  }

  const showTabItem = (item, index) => {
    return <NavLink to={`${item.path}?keywords=${res}`}>{item.name}</NavLink>;
  };


  const searchSong = (value) => {
    if(value.trim().length<1){
      message.info('关键词不能为空！');
      return ;
    }else{
      const keywords = value;
      const type=1
      dispatch(getSearchSongAction(keywords,type))
      history.push(`/search/searchList?keywords=${keywords}`)
    }
  
  };
  return (
    <TopRankingWrapper>
      <SearchBarWrapper>
        <div className="search-bar wrap-v2">
          <Search
            size="large"
            defaultValue={res||''}
            className="Search"
            placeholder="就是歌多"
            enterButton
            onSearch={searchSong}
          />
        </div>
      </SearchBarWrapper>
      <ContentListWrapper>
        <div className="contetn">
          {tabControl.map((item, index) => {
            return (
              <div key={item.id} className="tab-item">
                {showTabItem(item, index)}
              </div>
            );
          })}
        </div>
        {renderRoutes(route.routes)}
      </ContentListWrapper>
    </TopRankingWrapper>
  );
});
