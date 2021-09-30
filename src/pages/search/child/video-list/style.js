import styled from "styled-components";

export const VideoListlWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  min-height: 300px;
  background-color: white;

  .video-content {
    zoom: 1;
    overflow: auto;
    padding: 30px 25px;

    .picImg {
      margin-bottom: 6px;
      position: relative;
     
      .video-time {
        position: absolute;
        bottom: 0;
        left: 0;
        color: white;
      }
    }
    .name {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      display: inline-block;
      max-width: 85%;
      vertical-align: middle;
      .mv-tips{
         border :2px solid rgb(158,16,104);
         font-weight: 550;
         color:rgb(158,16,104);
         line-height: 23px;
      }
    }
    .singer-item {
      margin-bottom: 30px;
      float: left;
      display: inline-block;
      /* overflow: hidden; */
      padding-left: 37px;
      cursor: pointer;
      width: 174px; 
      img {
        width: 140px;
        height: 90px;
      }
      .singer-name{
        .userName{
            width: 100%;
        }  
      }
    }
  }
`;
