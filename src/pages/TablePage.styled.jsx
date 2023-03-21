import styled from 'styled-components';

export const TablePageStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
`;

export const TablePageHeader = styled.div`
  background-color: #4d7aa1;
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  display: flex;
  align-items: center;

  .tablePage_header_icon {
    font-size: 22px;
    color: #fff;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  .tablePage_header_title {
    flex: 1;
    font-size: 22px;
    text-align: center;
    color: #fff;
  }
`;

export const TablePageBillContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableBillCard = styled.div`
  padding: 30px;
  background-color: beige;
  flex: 1;

  .payment_info_item {
    padding: 5px 0;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed black;
  }
`;

export const BottomNav = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 50px;
  background-color: #4d7aa1;
  box-shadow: -1px 0px 7px gray;
`;
