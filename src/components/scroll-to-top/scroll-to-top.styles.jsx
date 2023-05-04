import styled from "styled-components";
import theme from "../../theme";

export const BackToTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 4em;
    background: ${theme.darkRed};
    color: white;
    cursor: pointer;
    border-radius: 100px;
    border: none;
    box-shadow: 0 5px 10px #ccc;

  
  &:hover {
    background: ${theme.defaultRed};
  }
  `