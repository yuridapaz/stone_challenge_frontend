import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FullBodyContainer, IndexPageHeader, CardContainer, InputStyle } from './IndexPage.styled';
import { TableCard } from '../components/TableCard';
import { RestaurantContext } from '../contexts/RestaurantContext';

function IndexPage() {
  // @ts-ignore
  const { tableList } = React.useContext(RestaurantContext);
  const [query, setQuery] = useState('');

  const filteredTables = tableList.filter((table) =>
    table.title.toLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <FullBodyContainer>
      <IndexPageHeader>
        <h2 className='title'>Controle de Mesas</h2>
      </IndexPageHeader>
      <InputStyle placeholder='Pesquisar mesa...' onChange={(e) => setQuery(e.target.value)} />
      <CardContainer>
        {filteredTables.map((table, i) => {
          return (
            <Link className='link_class' key={i} to={table.title}>
              <TableCard tab={table} />
            </Link>
          );
        })}
      </CardContainer>
    </FullBodyContainer>
  );
}

export default IndexPage;
