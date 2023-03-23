const CalculateBillAmount = (tableOrderItens) => {
  return tableOrderItens
    .map((item) => {
      return item.valor * item.quantidade;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);
};

export default CalculateBillAmount;
