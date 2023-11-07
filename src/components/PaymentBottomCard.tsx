import styled from "styled-components";

const BottomCardDiv = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4d7aa1;
  box-shadow: -1px 0px 8px #4f749488;

  input {
    margin-right: 10px;
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid black;
  }

  .submit_button {
    font-size: 1.2rem;
    padding: 8px;
    border-radius: 5px;
    background-color: #4d7aa1;
    color: #fff;
    border: 2px double #fff;
    cursor: pointer;
  }
`;

type Props = {
  children: React.ReactNode;
};

const PaymentBottomCard = ({ children }: Props) => {
  return <BottomCardDiv>{children}</BottomCardDiv>;
};

export default PaymentBottomCard;
