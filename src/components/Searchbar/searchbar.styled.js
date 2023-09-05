import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px 16px;
  background-color: transparent;
  border: none;
  outline: 1px solid #505050;
  color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  font-size: 16px;
  font-family: Montserrat;
  &::placeholder {
    color: #d2aeae;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8600;
  border: 4px solid transparent;
  border-radius: 10px;
  width: 48px;
  height: 48px;
  transition: 0.3s border, 0.3s background-color, 0.2s transform;
  cursor: pointer;

  &:hover {
    border-color: #ff9e00;
    background-color: #fba647;
  }

  &:active {
    transform: scale(0.9);
  }
`;
