import styled from 'styled-components';
import { MdDinnerDining } from 'react-icons/md';

const TableCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  background-color: #fff;
  font-family: 'Open Sans', sans-serif;

  .table_card_div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 5px;

    .table_card_icon {
      font-size: 25px;
      color: orangered;
    }
    .table_card_name {
      font-size: 20px;
    }
  }

  .price_card_div {
    display: flex;
    justify-content: space-between;
    background-color: #e9e9e9;
    padding: 7px 5px;
    .price_card_text {
      font-style: italic;
    }
    .price_card_value {
      color: #00bb00;
      font-weight: 600;
    }
  }
`;

export const TableCard = ({ comanda }) => {
  return (
    <TableCardStyled comanda={comanda}>
      <div className='table_card_div'>
        <MdDinnerDining className='table_card_icon' />
        <h2 className='table_card_name'>{comanda.nome}</h2>
      </div>
      <div className='price_card_div'>
        <h6 className='price_card_text'>Total:</h6>
        <h6 className='price_card_value'>R$ 250</h6>
      </div>
    </TableCardStyled>
  );
};
