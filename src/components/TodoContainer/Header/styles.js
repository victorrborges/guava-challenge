import styled from "styled-components";

export const Container = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.div`
  width: 100%;
  padding: 0 28px;
  text-align: center;
  color: #191847;
  font-size: 24px;
  line-height: 29px;
`

export const Image = styled.img`
  width: 50%;
  margin: 30px auto 28px;
  display: block;

  @media screen and (max-width: 725px) {
    width: 65%;
  }
`;