import React, { memo,useEffect } from 'react';
import {dicoverMenu} from '@/common/local-data';
import {
  DiscoverWrapper,
  TopMenu,
} from './style';

import { renderRoutes } from 'react-router-config';
// import request from '@/services/request';
import {NavLink} from 'react-router-dom';

export default memo(function CADiscover(props) {
  const { route } = props;
  useEffect(() => {
   
  })
  // console.log(route);
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className='wrap-v1'>
          {
            dicoverMenu.map((item,index)=>{
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div> 
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
