import { render, screen } from '@testing-library/react';
import React from 'react';
import { TableCard } from '../components/TableCard';

const testingTable1 = {
  title: 'Mesa 1',
  itens: [
    {
      nome: 'Frango a passarinho',
      valor: 39.9,
      quantidade: 1,
    },
    {
      nome: 'Filé com fritas',
      valor: 59.9,
      quantidade: 1,
    },
    {
      nome: 'Coca-Cola',
      valor: 5.9,
      quantidade: 4,
    },
    {
      nome: 'Fritas',
      valor: 25.9,
      quantidade: 1,
    },
  ],
};

const newTable = {
  ...testingTable1,
  itens: [],
};

describe('TableCard', () => {
  it('Deve mostrar o texto contigo dentro da div', () => {
    render(<TableCard tab={testingTable1} />);

    expect(screen.getByText('Mesa 1')).toBeInTheDocument();
  });

  // it('Deve conter mais de um item na comanda', () => {
  //   expect(testingTable1.itens).toHaveLength(4);
  // });

  test('Deve mostrar o total da conta dentro do elemento', () => {
    const renderResult = render(<TableCard tab={testingTable1} />);

    const oQueEuQuero = renderResult.container.querySelector('.price_card_value')?.textContent;
    // console.log(renderResult.debug);
    renderResult.debug();

    expect(oQueEuQuero).toEqual('R$ 149.30');
  });

  test('Deve mostrar o total da conta dentro do elemento', () => {
    const renderResult = render(<TableCard tab={testingTable1} />);

    const oQueEuQuero = renderResult.container.querySelector('.empty_bill');
    // console.log(renderResult.debug);
    // renderResult.debug();

    expect(oQueEuQuero).toBeTruthy();
  });
});
