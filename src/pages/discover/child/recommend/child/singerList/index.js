import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getToplistArtistAction } from "../../store/actionCreators";

import { getCount, getSizeImage } from "@/utils/format-utils";
import {
    SingerListWrapper
} from './style';
export default memo(function SingerList() {
  
  // other hooks
  const { singerList } = useSelector(
    (state) => ({
        singerList: state.getIn(["recommend", "singerList"]),
    }),
    shallowEqual
  );
  console.log(singerList);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getToplistArtistAction(1));
  }, [dispatch]);


  return (
    <SingerListWrapper>
      <div className="title">
          <h3>华语歌手榜</h3>
      </div>
      <div className="list">
          {
           singerList.slice(0,10).map((item,index)=>{
              return (
                  <div key={item.id} className="item">
                      <div className="image">
                          <img src={getSizeImage(item.picUrl,62)} alt="" />
                      </div>
                      <div className="info">
                          <h3>{item.name}</h3>
                          <div className="alias">
                              {item.alias[0]||item.name}
                          </div>
                      </div>
                  </div>
              ) 
           })   
          }
      </div>
    </SingerListWrapper>
  );
});
