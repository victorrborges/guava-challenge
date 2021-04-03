import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  padding: 10px 28px 10px 28px;

  &:hover {
    background-color: #F2F2F2;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  min-height: 30px;
  width: -webkit-fill-available;
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 19px;
  margin: auto 0;
`;