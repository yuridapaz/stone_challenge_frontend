import styled from 'styled-components';

export const FullBodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  padding-bottom: 10rem;
`;

export const IndexPageHeader = styled.div`
  background-color: #4d7aa1;
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;

  .title {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 15px;
  border: 1px solid antiquewhite;
  letter-spacing: 3px;
`;

export const CardContainer = styled.div`
  max-width: 500px;
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;

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
