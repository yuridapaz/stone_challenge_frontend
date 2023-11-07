import styled from 'styled-components';

export const TablePageBillItemStyled = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px dashed black;

  .valores_div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.8rem;
    }
  }

  .valores_div p {
    &:nth-child(3) {
      color: green;
    }
  }
`;

export const TableBillItem = ({ tabItem }) => {
  return (
    <TablePageBillItemStyled>
      <div className='name_div'>
        <p> {tabItem.name} </p>
      </div>
      <div className='valores_div'>
        <p>Qtd: {tabItem.amount} </p>
        <p> R${tabItem.price.toFixed(2)} </p>
        <p> R${(tabItem.price * tabItem.amount).toFixed(2)}</p>
      </div>
    </TablePageBillItemStyled>
  );
};
