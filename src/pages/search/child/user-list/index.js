import { UserListWrapper } from "./style";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getKeywords } from "@/utils/search";
import { getSearchSongAction } from "@/pages/search/store/actionCreators";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { Button, Radio } from "antd";
import { CustomerServiceOutlined,PlusOutlined, WomanOutlined, ManOutlined,SafetyCertificateOutlined } from "@ant-design/icons";

export default memo(function UserList(props) {
  const dispatch = useDispatch();
  let keywords = getKeywords(props);
  let type = 1002;

  const { userList } = useSelector(
    (state) => ({
      userList: state.getIn(["search", "userList"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getSearchSongAction(keywords, type));
  }, [dispatch]);
  console.log(userList);
  return (
    <UserListWrapper>
      <div className="user-content">
        {userList.map((item, index) => {
          return (
            <div key={item.id} className="user-item">
              <div className="picImg">
                <img src={getSizeImage(item.avatarUrl, 54)} alt="" />
              </div>
              <div className="user-name ">
                <div className="text-overflow">
                  {item.nickname}
                  <span>
                    {item.avatarDetail&&item.avatarDetail.userType == 2||item.avatarDetail&&item.avatarDetail.userType == 10?<SafetyCertificateOutlined className='approve user-name-public' />:''}
                    {item.avatarDetail&&item.avatarDetail.userType == 4 ? <CustomerServiceOutlined className='music-people user-name-public' /> :''}
                    {item.gender == 1 ? (
                      <ManOutlined className="man user-name-public" />
                    ) : (
                      <WomanOutlined className="woman user-name-public" />
                    )}
                  </span>
                </div>
                <div className="text-overflow">{item.signature}</div>
              </div>
              <div className="attention ">
                <Button icon={<PlusOutlined />} type="Default" size="small">
                  关注
                </Button>
              </div>
              <div className="song-list">歌单:{item.playlistCount}</div>

              <div className="fan">
                <span>粉丝:</span>
                <span>{item.followeds}</span>
              </div>
            </div>
          );
        })}
      </div>
    </UserListWrapper>
  );
});
