import styled from "styled-components";
import { ResponsiveContainer } from "../../assets/GlobalStyles";

export const Container = styled(ResponsiveContainer)`
  margin: 5vh 20px 2vh;
  min-height: 150px;
  max-width: 800px;
  min-width: 320px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  padding: 24px 0 20px;

  @media screen and (min-width: 587px) {
    &:after {
      content: "";
      flex: auto;
    }
  }

  @media screen and (max-width: 586px) {
    justify-content: center;
  }
`;