/* eslint-disable no-unused-vars */
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

const TablePage = () => {
  const { tableList, totalBillPrice } = React.useContext(RestaurantContext);
  const { nomedamesa } = useParams();
  //
  const [currentTableBill] = tableList
    .filter((tab) => {
      return tab.title === nomedamesa;
    })
    .map((tab) => {
      return tab.itens;
    });
  //

  const valorTotalDaConta = totalBillPrice(currentTableBill);
  const [valorPago, setValorPago] = useState(0);
  const [faltaPagar, setFaltaPagar] = useState(Number(valorTotalDaConta));
  const [inputValue, setInputValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valorPago === Number(valorTotalDaConta)) {
      return;
    }

    setFaltaPagar((prev) => {
      return prev - inputValue;
    });

    setValorPago((prev) => {
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
        <h2 className='tablePage_header_title'>{nomedamesa}</h2>
      </TablePageHeader>
      {currentTableBill.length > 0 ? (
        <>
          <TablePageBillContainer>
            <TableBillCard>
              {currentTableBill.map((billItem, i) => {
                return <TableBillItem tablebill={billItem} key={i} />;
              })}
              <div className='payment_info_item'>
                <p>Total a pagar:</p>
                <span>R$ {valorTotalDaConta.toFixed(2)}</span>
              </div>
              <div className='payment_info_item'>
                <p>Total pago:</p>
                <span>R$ {valorPago.toFixed(2)}</span>
              </div>
              <div className='payment_info_item'>
                <p>Faltar pagar:</p>
                <span>R$ {faltaPagar.toFixed(2)}</span>
              </div>
            </TableBillCard>
          </TablePageBillContainer>
          <PaymentBottomCard>
            <form action='' onSubmit={handleSubmit}>
              <input
                type='number'
                step='0.01'
                min='0'
                max={faltaPagar}
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
