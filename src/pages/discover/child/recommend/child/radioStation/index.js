import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { SingerListWrapper } from "./style";
import { getRadioStationAction } from "../../store/actionCreators";
import { getCount, getSizeImage } from "@/utils/format-utils";

export default memo(function RadioStation() {
  // other hooks
  const { RadioList } = useSelector(
    (state) => ({
      RadioList: state.getIn(["recommend", "RadioList"]),
    }),
    shallowEqual
  );

  console.log(RadioList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRadioStationAction());
  }, [dispatch]);

  return (
    <SingerListWrapper>
      <div className="title">
        <h3>推荐电台</h3>
      </div>
      {RadioList.map((item, index) => {
        return (
          <div key={item.id} className="item">
            <div className="image">
              <img src={getSizeImage(item.picUrl, 62)} alt="" />
            </div>
            <div className="info">
              <h3>{item.name}</h3>
              {/* <div className="alias">
                              {item.alias[0]||item.name}
                          </div> */}
            </div>
          </div>
        );
      })}
    </SingerListWrapper>
  );
});
