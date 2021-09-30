import styled from "styled-components";

export const SongDetailWrapper = styled.div`
  padding: 0 150px 100px 150px;
  background: url(${(props) => props.bgImage}) no-repeat;
  background-size: 100% 100%;
  min-height: 600px;
  margin: 0 auto;
  display: flex;
`;

export const SongDetailLeftWrapper = styled.div`
  flex: 2;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotate {
    animation: rotate 7s linear infinite;
  }
  .Singer-pic {
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      rgb(8, 8, 8),
      rgb(55, 55, 55),
      rgb(31, 31, 31),
      rgb(52, 52, 52),
      rgb(30, 30, 30)
    );
    .item {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const SongDetailRightWrapper = styled.div`
  flex: 6;
  padding-left: 80px;
  .song-info {
    margin-top: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 15px 20px;
    border-radius: 10px;
    .singer {
      color: rgb(233, 234, 235);
    }
    .name {
      display: flex;
      align-items: center;
      color: rgb(233, 234, 235);
      h1 {
        color: rgb(233, 234, 235);
        padding-left: 8px;
        font-size: 30px;
      }
    }
  }

  .lyrics {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    min-height: 450px;
    padding: 30px 0;
    margin-top: 10px;
    .lyrics-item {
      color: rgb(233, 234, 235);
      font-size: 15px;
      margin-bottom: 6px;
      text-align: center;
    }

    .load-more {
      cursor: pointer;
      text-align: center;
      font-size: 14px;
      color: rgba(194, 12, 12, 1);
    }
  }
`;

export const SongDetailOtherWrapper = styled.div`
  flex: 2;
  margin-left: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px 20px;
  border-radius: 10px;
  margin-top: 40px;
  height: 400px;
  .back{
    padding: 10px;
    position: fixed;
    bottom: 75px;
    right: 5px;
    color: rgb(233,234,235);
    font-size: 26px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;
  }
  .title {
    display: flex;
    align-items: center;
    color: rgb(233, 234, 235);

    h2 {
      color: rgb(233, 234, 235);
      margin-left: 6px;
    }
  }

  .song-list {
    .item {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      color: rgb(233, 234, 235);
      .name {
        .song-name {
          font-size: 13px;
        }
        .singer {
          display: flex;
          justify-content: space-between;
          .fee {
          }
        }
      }
      .play {
        min-width: 50px;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
`;
