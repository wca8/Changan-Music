import React, { memo, useEffect,useRef,useState,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { getTopBannerAction } from "../../store/actionCreators";
export default memo(function TopBanner() {
  const { topBanners } = useSelector((state) => ({
    topBanners: state.get("recommend").get("topBanners"),
  }));

  // console.log(topBanners);

  const dispatch = useDispatch();
  //   发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

    // 其他hooks
    const bannerRef = useRef();

    const [currentIndex, setcurrentIndex] = useState(0)

    const bannerChange=useCallback(
      (from,to)=>{
        setcurrentIndex(to)
      },
      [],
    )

     const bgImage=topBanners[currentIndex]&& (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel  beforeChange={bannerChange} autoplay effect="fade"  ref={bannerRef}>
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>

        {/* <BannerRight></BannerRight> */}

        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
