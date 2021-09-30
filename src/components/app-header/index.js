import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

import { headerLinks } from "@/common/local-data";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { message, Button } from 'antd';
import { getSearchSongAction } from "@/pages/search/store/actionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// 页面代码
const showSelectItem = (item, index) => {
  if (index < 3) {
    return (
      <NavLink to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    );
  } else {
    return (
      <a target="_blank" href={item.link}>
        {item.title}
      </a>
    );
  }
};

export default memo(function CAAppHeader(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  
  const searchSong = (e) => {
    const keywords = e.target.defaultValue;
    if (keywords.trim().length < 1) {
      message.info("关键词不能为空！");
      return;
    } else {
      
      let type = 1;
      dispatch(getSearchSongAction(keywords, type));
      history.push(`/search/searchList?keywords=${keywords}`);
    }

    // history.push({
    //   pathname:`/search`,
    //   search: `?keywords=${keywords}`,
    //   state:{
    //     keywords
    //   },
    // })
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* <a href="#/" className="logo sprite_01">网易云音乐</a> */}
          <a href="#/" className="logo"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input
            className="search"
            onPressEnter={(e) => searchSong(e)}
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
          />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>

      <div className="divider"></div>
    </HeaderWrapper>
  );
});
