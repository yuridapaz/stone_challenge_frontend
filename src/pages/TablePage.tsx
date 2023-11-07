import { Link, useParams } from 'react-router-dom';

import PaymentBottomCard from '../components/PaymentBottomCard';
import { TableBillItem } from '../components/TableBillItem';
import {
  RestaurantContext,
  RestaurantContextType,
} from '../contexts/RestaurantContext';
import { IoMdArrowBack } from 'react-icons/io';
import React, { useState } from 'react';
import CalculateBillAmount from '../utils/CalculateBillAmount';
import {
  TableBillCard,
  TablePageBillContainer,
  TablePageHeader,
  TablePageStyled,
} from './TablePage.styled';

const TablePage = () => {
  const { tableList } = React.useContext(
    RestaurantContext
  ) as RestaurantContextType;
  const { tabletitle } = useParams();
  const currentTableBill = tableList?.find((tab) => tab.title === tabletitle)
    ?.itens;

  const totalBillAmount = CalculateBillAmount(currentTableBill!);
  const [amountPaid, setAmountPaid] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const amountToBePaid = totalBillAmount - amountPaid;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (amountPaid === totalBillAmount) {
      return;
    }

    setAmountPaid((prev) => {
      return prev + inputValue;
    });

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
      {currentTableBill!.length > 0 ? (
        <>
          <TablePageBillContainer>
            <TableBillCard>
              {currentTableBill?.map((tabItem, i) => {
                return (
                  <TableBillItem
                    tabItem={tabItem}
                    key={i}
                  />
                );
              })}
              <div className='payment_info_item'>
                <p>Total a pagar:</p>
                <span>R$ {totalBillAmount.toFixed(2)}</span>
              </div>
              <div className='payment_info_item'>
                <p>Total pago:</p>
                <span>R$ {amountPaid.toFixed(2)}</span>
              </div>
              <div className='payment_info_item'>
                <p>Faltar pagar:</p>
                <span>R$ {amountToBePaid.toFixed(2)}</span>
              </div>
            </TableBillCard>
          </TablePageBillContainer>
          <PaymentBottomCard>
            <form
              action=''
              onSubmit={handleSubmit}
            >
              <input
                type='number'
                step='0.01'
                min='0'
                max={amountToBePaid}
                onChange={(e) => setInputValue(Number(e.target.value))}
                value={inputValue}
              />
              <button
                type='submit'
                className='submit_button'
              >
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
