import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PaymentBottomCard from '../components/PaymentBottomCard';
import { TableBillItem } from '../components/TableBillItem';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { IoMdArrowBack } from 'react-icons/io';
import {
  TableBillCard,
  TablePageBillContainer,
  TablePageHeader,
  TablePageStyled,
} from './TablePage.styled';
import { CalculateBillAmount, CalcaulteAmountPaid } from '../utils/CalculatePayments';

const TablePage = () => {
  // @ts-ignore
  const { tableList, setTableList } = React.useContext(RestaurantContext);
  const { tabletitle } = useParams();
  const currentTable = tableList.find((tab) => tab.title === tabletitle);

  const totalBillAmount = CalculateBillAmount(currentTable['itens']);

  const [inputValue, setInputValue] = useState(0);
  // const amountToBePaid = totalBillAmount - amountPaid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentTable.hasOwnProperty('amountPaid')) {
      const newTableList = tableList.map((tab) =>
        tab.title === tabletitle
          ? {
              ...tab,
              amountPaid: [inputValue],
            }
          : tab
      );
      setTableList(newTableList);
    } else {
      const newTableList = tableList.map((tab) =>
        tab.title === tabletitle
          ? {
              ...tab,
              amountPaid: [...tab.amountPaid, inputValue],
            }
          : tab
      );
      setTableList(newTableList);
    }

    setInputValue(0);
  };

  return (
    <TablePageStyled>
      <TablePageHeader>
        <Link to={'/'}>
          <IoMdArrowBack className='tablePage_header_icon' />
        </Link>
        <h2 className='tablePage_header_title'>{tabletitle}</h2>
      </TablePageHeader>
      {currentTable['itens'].length > 0 ? (
        <>
          <TablePageBillContainer>
            <TableBillCard>
              {currentTable['itens'].map((tabItem, i) => {
                return <TableBillItem tabItem={tabItem} key={i} />;
              })}
              <div className='payment_info_item'>
                <p>Total a pagar:</p>
                <span>R${totalBillAmount.toFixed(2)}</span>
              </div>
              <div className='payment_info_item'>
                <p>Total pago:</p>
                <span>
                  R${currentTable.amountPaid ? CalcaulteAmountPaid(currentTable.amountPaid) : 0}
                </span>
              </div>
              <div className='payment_info_item'>
                <p>Faltar pagar:</p>
                <span>
                  R$
                  {currentTable.amountPaid
                    ? (totalBillAmount - CalcaulteAmountPaid(currentTable.amountPaid)).toFixed(2)
                    : totalBillAmount}
                </span>
              </div>
            </TableBillCard>
          </TablePageBillContainer>
          <PaymentBottomCard>
            <form action='' onSubmit={handleSubmit}>
              <input
                type='number'
                step='0.01'
                min='0'
                max={
                  currentTable.amountPaid
                    ? (totalBillAmount - CalcaulteAmountPaid(currentTable.amountPaid)).toFixed(2)
                    : totalBillAmount
                }
                onChange={(e) => setInputValue(Number(e.target.value))}
                value={inputValue}
              />
              <button type='submit' className='submit_button'>
                Adicionar Pagamento
              </button>
            </form>
          </PaymentBottomCard>
        </>
      ) : (
        <TablePageBillContainer>
          <h1>Mesa fechada!</h1>
        </TablePageBillContainer>
      )}
    </TablePageStyled>
  );
};

export default TablePage;
