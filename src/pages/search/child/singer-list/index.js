import React, { memo , useEffect} from 'react'
import { useDispatch, useSelector,shallowEqual } from "react-redux";

import {SingerListWrapper} from './style'
import {getKeywords} from '@/utils/search'
import {getSearchSongAction} from '@/pages/search/store/actionCreators'
import { getSizeImage } from "@/utils/format-utils";
export default memo(function SingerList(props) {
  const dispatch = useDispatch();
  let keywords=getKeywords(props)
  let type=100
  
  const {  singerList } = useSelector(
    (state) => ({
      singerList: state.getIn(["search", "singerList"]),
    }),
    shallowEqual
  );
 

  useEffect(() => {
    dispatch(getSearchSongAction(keywords,type))
   }, [dispatch])

 
  console.log(singerList);
  return (
    <SingerListWrapper>
      <div className="singer-content">
        {
          singerList.map((item,index)=>{
            return(
              <div key={item.id} className="singer-item">
                <div className='picImg'>
                  <img src={getSizeImage(item.picUrl,140)} alt="" />
                  <div className='singer-cover'></div>
                </div>
                <div className='name'>
                 <span>{item.name}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </SingerListWrapper>
  )
})