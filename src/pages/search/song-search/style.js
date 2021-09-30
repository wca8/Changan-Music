import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  /* min-height: 760px; */
  background-color: rgb(243, 244, 245);
`;
export const SearchBarWrapper = styled.div`
  .search-bar {
    background-color: white;
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }
  .Search {
    width: 420px;
    /* margin: 0 auto; */
  }
`;

export const ContentListWrapper = styled.div`
  .contetn {
    width: 980px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    padding: 20px 60px 0px 60px;
  }
  .tab-item {
    width: 60px;
    font-size: 16px;
  }
  .tab-item a {
    color: rgb(51, 51, 51);
  }
  .tab-item a.active {
    padding: 6px;
    border-bottom: 2px solid;
    color: rgb(158, 16,104);
  }
`;
