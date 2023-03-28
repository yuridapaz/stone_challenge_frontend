import CalculateBillAmount from '../utils/CalculateBillAmount';
import listoftables from '../listoftables.json';

const testingTab = [
  {
    nome: 'Frango a passarinho',
    valor: 10,
    quantidade: 1,
  },
  {
    nome: 'Filé com fritas',
    valor: 10,
    quantidade: 4,
  },
  {
    nome: 'Coca-Cola',
    valor: 10,
    quantidade: 2,
  },
  {
    nome: 'Fritas',
    valor: 10,
    quantidade: 3,
  },
];

describe('Calculando o valor total da conta', () => {
  it('Receber valor total da conta 100', () => {
    expect(CalculateBillAmount(testingTab)).toBe(100);
  });
});

describe('Calculando o valor total da conta 2', () => {
  it('Receber valor total da conta 100', () => {
    console.log(listoftables);
    // console.log(CalculateBillAmount(listoftables[2]['itens']));
    expect(CalculateBillAmount(listoftables[3]['itens'])).toBe(100);
  });
});
