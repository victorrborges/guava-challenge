import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px 28px 10px 28px;
`;

export const Input = styled.input`
  border-bottom: 1px solid rgba(25, 24, 71, 0.4);
  height: 30px;
  width: -webkit-fill-available;
  font-size: 16px;
  line-height: 19px;
  color: #191847;
  padding-right: 50px;

  &:focus {
    border-color: #2B44FF;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(25, 24, 71, 0.4);
  }
  :-ms-input-placeholder {
     color: rgba(25, 24, 71, 0.4);
  }
`;