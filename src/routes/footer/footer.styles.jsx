import styled from "styled-components";

import theme from "../../theme";

export const FooterContainer = styled.div`
    height: 50px;
    width: 100%;
    margin-top: 3.5rem;
    padding: 0.8rem 2.5rem;
    background-color: ${theme.mainColor};
    text-align: center;
    position: absolute;
    bottom: 0;
`
export const FooterLink = styled.a`
  padding: 0.8rem 1rem;
  color: ${theme.subColor};
  cursor: pointer;

  &:hover {
    color: ${theme.defaultRed}; 
  }
`