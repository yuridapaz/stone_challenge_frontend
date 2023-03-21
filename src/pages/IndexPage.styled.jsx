import styled from 'styled-components';

export const FullBodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IndexPageHeader = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  color: #fff;
  background-color: #4d7aa1;

  .title {
    font-size: 1.15rem;
    text-align: center;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  max-width: 500px;
  font-size: 1rem;
  padding: 12px;
  border: 1px solid antiquewhite;
`;

export const CardContainer = styled.div`
  max-width: 500px;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;

  .link_class {
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;
