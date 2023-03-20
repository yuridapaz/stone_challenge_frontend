import React from 'react';
import { FullBodyContainer, IndexPageHeader, CardContainer, InputStyle } from './IndexPage.styled';
import { TableCard } from '../components/TableCard';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';

function IndexPage() {
  const { tableList } = React.useContext(RestaurantContext);

  return (
    <FullBodyContainer>
      <IndexPageHeader>
        <h2 className='title'>Controle de Mesas</h2>
      </IndexPageHeader>
      <InputStyle placeholder='Pesquisar mesa . . .' />
      <CardContainer>
        {tableList.map((table, i) => {
          return (
            <Link className='link_class' key={i} to={table.title}>
              <TableCard comanda={table} />
            </Link>
          );
        })}
      </CardContainer>
    </FullBodyContainer>
  );
}

export default IndexPage;
