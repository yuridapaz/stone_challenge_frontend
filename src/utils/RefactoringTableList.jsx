const RefactoringTableList = (tableList) => {
  return tableList.map((tab, i) => {
    return {
      ...tab,
      openTable: tab.itens.length > 0 ? true : false,
    };
  });
};

export default RefactoringTableList;
