import styled from "styled-components";
import doneCheck from "../../assets/images/done.svg"
import doneHover from "../../assets/images/done-hover.svg";

export const Container = styled.div`
  display: flex;
  margin-right: 15px;
  align-items: center;
`;

export const Checkbox = styled.div`
  border: 1px solid rgba(25, 24, 71, 0.4);
  border-radius: 100%;
  width: 28px;
  height: 28px;

  ${({ added }) => added && `
    cursor: pointer;
  `}

  ${({ done }) => done && `
    background: url(${doneCheck}) center no-repeat;
    border-color: #2B44FF;
  `}

  ${({ added, done }) => added && !done && `
    border-color: #191847;

    &:hover {
      border-color: #2B44FF;
      background: #2B44FF url(${doneHover}) center no-repeat;
    }
  `}
`;