import styled from "styled-components";

export const SingerListWrapper = styled.div`
  padding: 20px;
  .title {
    padding: 0 0 9px 0;
    border-bottom: 2px solid rgba(204, 204, 204);
    margin-bottom: 30px;
  }
  .item {
    display: flex;
    margin-bottom: 20px;
    .image {
      margin-right: 20px;
    }
    .info  h3{
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
