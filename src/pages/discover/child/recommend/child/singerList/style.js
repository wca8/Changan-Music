import styled from "styled-components";

export const SingerListWrapper = styled.div`
  padding: 20px;
  .title{
    padding:0 0 9px 0;
    border-bottom: 2px solid rgba(204,204,204);
    h3{
      margin-bottom: 5px;
    }
  }
  .list{
    margin-top: 30px;
    .item{
      display: flex;
      margin-bottom: 10px;
      cursor: pointer;
      .info{
        h3{
          color: rgba(0,0,0,.8);
          font-weight: 550;
        }
      }
      .image{
          width: 62px;
          height: 62px;
          margin-right: 10px;
          img{
              width: 100%;
          }
      }
  }
  }
 
`;
