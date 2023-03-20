import React from 'react';
import styled from 'styled-components';

const BottomCardDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4d7aa1;
  box-shadow: -1px 0px 8px #4f749488;

  input {
    margin-right: 10px;
  }
`;

const PaymentBottomCard = ({ children }) => {
  return <BottomCardDiv>{children}</BottomCardDiv>;
};

export default PaymentBottomCard;
