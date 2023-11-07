import { render, screen } from '@testing-library/react';
import { TableBillItem } from '../components/TableBillItem';

const tableItemMock = {
  name: 'Coca-Cola',
  amount: 1,
  price: 5.99,
};

describe('Table Bill Item Component', () => {
  test('should render the component', () => {
    render(<TableBillItem tabItem={tableItemMock} />);

    expect(screen.getByText('Coca-Cola')).toBeInTheDocument();
    expect(screen.getByText(/qtd:1/i)).toBeInTheDocument();
  });
});
