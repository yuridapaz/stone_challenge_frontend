import { IBillItem } from '../types/types';

const CalculateBillAmount = (tableOrderItens: IBillItem[]) => {
  return tableOrderItens!
    .map((item) => {
      return item.price * item.amount;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
};

export default CalculateBillAmount;
