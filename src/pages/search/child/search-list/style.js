import styled from "styled-components";

export const SearchListWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  background-color: white;
  padding:20px 50px 50px 50px;
  .item {
    display: flex;
    padding: 10px 15px;
    justify-content: space-between;
    .name,.album,.singer {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      
    }
    .name{
        width: 300px;
        display: flex;
        .fee{
            margin-left: 10px;
        }
    }
    .singer{
        width: 150px;
    }
    .album{
       width: 200px;

    }
    &:hover{
        background-color: #fff0f6;
        cursor: pointer;
    }
  }
`;
