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

describe('TableCard', () => {
  it('Deve mostrar o texto contigo dentro da div', () => {
    render(<TableCard tab={testingTable1} />);

    expect(screen.getByText(/mesa 1/i)).toBeInTheDocument();
  });

  it('Deve conter mais de um item na comanda', () => {
    expect(testingTable1.itens).toHaveLength(4);
  });
});
