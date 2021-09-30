import styled from "styled-components";
import coverImg from "@/assets/img/mask.png";
export const SingerListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  min-height: 300px;
  background-color: white;

  .singer-content {
    zoom: 1;
    overflow: auto;
    padding: 30px 25px;
    .name {
      display: flex;
      justify-content: center;
      white-space: nowrap;
      padding: 10px;
      display: flex;
      justify-content: center;
      width: 140px;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        display: inline-block;
        max-width: 85%;
        vertical-align: middle;
      }
    }
    .singer-item {
      margin-bottom: 30px;
      float: left;
      display: inline-block;
      overflow: hidden;
      padding-left: 37px;
      cursor: pointer;
      .picImg {
        position: relative;
        .singer-cover {
          position: absolute;
          left: 0px;
          right: 0px;
          top: 0;
          bottom: 0;
          text-indent: -9999px;
          background: url(${coverImg}) ;
        }
      }
      img {
        width: 140px;
        height: 140px;
      }
    }
  }
`;
