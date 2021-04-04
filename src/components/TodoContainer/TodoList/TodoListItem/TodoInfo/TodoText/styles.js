import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 30px;
  width: -webkit-fill-available;
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin: auto 0;

  ${({ done }) => done && `
    text-decoration: line-through;
  `}
`;