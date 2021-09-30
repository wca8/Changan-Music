import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  min-height: 600px;
  .top {
    height: 30px;
    background-color: #9e1068;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover, &.active {
        text-decoration: none;
        background-color: #800d50;
        border-radius: 20px;
      }
    }
  }
`