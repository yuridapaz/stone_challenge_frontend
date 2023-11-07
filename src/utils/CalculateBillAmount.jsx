const CalculateBillAmount = (tableOrderItens) => {
  return tableOrderItens
    .map((item) => {
      return item.price * item.amount;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
};

export default CalculateBillAmount;
