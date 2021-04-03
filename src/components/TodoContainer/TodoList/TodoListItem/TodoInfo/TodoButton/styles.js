import styled from "styled-components";
import editBtn from "../../../../../../assets/images/edit.svg";
import removeBtn from "../../../../../../assets/images/remove.svg";

export const Container = styled.div`
  display: flex;
  margin-left: 8px;
  align-items: center;
`;

export const Oval = styled.div`
  border: 1px solid #2B44FF;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  cursor: pointer;

  ${({ edit }) => edit && `
    background: url(${editBtn}) no-repeat center;
    margin-left: 7px;
  `}

  ${({ remove }) => remove && `
    background: url(${removeBtn}) no-repeat center;
  `}
`;