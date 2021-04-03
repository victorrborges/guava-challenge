import styled from "styled-components";
import pipe from "./images/pipe.svg";
import plant from "./images/plant.svg";

export const PageContainer = styled.div`
  padding: 0;
  width: 100%;
  max-width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: url(${pipe}) no-repeat 8vw 30vh, url(${plant}) no-repeat left 83vw bottom 10vh, linear-gradient(180deg, #DDE3E9 175px, #FFFFFF 175px);
  padding-bottom: 5vw;
`;

export const ResponsiveContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
