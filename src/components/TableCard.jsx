// @ts-nocheck
import styled from 'styled-components';
import { MdDinnerDining } from 'react-icons/md';
import React from 'react';
import CalculateBillAmount from '../utils/CalculateBillAmount';

const TableCardStyled = styled.div`
  width: 180px;
  margin: 12px 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 6px;
  box-shadow: 2px 2px 5px #b8b8b8;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;

  .table_card_div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 5px;

    .table_card_icon {
      font-size: 25px;
      color: orangered;
    }

    .table_card_icon.empty_bill {
      color: grey;
    }

    .table_card_name {
      font-size: 20px;
    }
  }

  .price_card_div {
    display: flex;
    justify-content: space-between;
    background-color: #e9e9e9;
    padding: 10px 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .price_card_text {
      font-style: italic;
    }

    .price_card_value {
      font-weight: 600;
      color: #00bb00;
    }

    .price_card_value.empty_bill {
      color: black;
    }
  }

  &:hover {
    border: 1px solid black;
  }
`;

export const TableCard = ({ tab }) => {
  return (
    <TableCardStyled tab={tab}>
      <div className='table_card_div'>
        <MdDinnerDining
          className={`table_card_icon ${CalculateBillAmount(tab.itens) === 0 ? 'empty_bill' : ''} `}
        />
        <h2 className='table_card_name'>{tab.title}</h2>
      </div>
      <div className='price_card_div'>
        <h6 className='price_card_text'>Total:</h6>

        <h6
          className={`price_card_value ${
            CalculateBillAmount(tab.itens) === 0 ? 'empty_bill' : ''
          } `}
        >
          R$ {CalculateBillAmount(tab.itens).toFixed(2)}
        </h6>
      </div>
    </TableCardStyled>
  );
};
