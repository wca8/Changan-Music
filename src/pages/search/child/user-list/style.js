import styled from "styled-components";

export const UserListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  min-height: 300px;
  background-color: white;
  .user-content {
    padding: 20px 60px;
    .user-item {
      margin-bottom: 30px;
      display: flex;
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: #fff0f6;
      }
      .user-name {
        display: flex;
        flex-direction: column;
        width: 470px;
        padding: 0px 20px;
        .approve{
            color: #9e1068;
        }
        .music-people{
            color: #722ed1;
          
        }
        .user-name-public{
            padding-left: 6px;
        }
        .man{
            color: #1890ff;
            
        }
        .woman{
            color: #9e1068;
         
        }
      }

      .attention,
      .song-list {
        padding: 0px 20px;
      }
      .song-list {
        white-space: normal;
        color: #595959;
      }
      .fan {
        color: #595959;
        text-align: center;
        position: absolute;
        right: 0;
        min-width: 100px;
      }
    }
  }
`;
