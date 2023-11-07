const RefactoringTableList = (tableList) => {
  return tableList.map((tab) => {
    return {
      ...tab,
      openTable: tab.itens.length > 0 ? true : false,
    };
  });
};

export default RefactoringTableList;
