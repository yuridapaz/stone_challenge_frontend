import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: #4d7aa1;
  width: 100%;
  padding: 10px 15px;

  .title {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid antiquewhite;
  letter-spacing: 3px;
`;

export const HeaderComponent = () => {
  return (
    <>
      <HeaderDiv>
        <div className='title'>Controle de Mesas</div>
      </HeaderDiv>
      <InputStyle placeholder='Pesquisar mesa . . .' />
    </>
  );
};
