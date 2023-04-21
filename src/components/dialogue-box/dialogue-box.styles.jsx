import styled from "styled-components";
import theme from "../../theme";

export const Dialogue = styled.div`
  position: relative;
  width: auto;
  margin: 0 3rem;
  padding: 2rem 3rem;
  padding-left: 12.1875rem;
  border-top: 3px solid #cccccc;
  border-left: 3px solid #cccccc;
  border-bottom: 3px solid #999999;
  border-right: 3px solid #999999;
  background-image: linear-gradient(#3366cc, #24478f);
  color: white;
  font-size: 1.2em;
  a {
    color: #fff;
  }
  a:hover {
    color: ${theme.mainColor};
  }
`
export const FitzDialogue = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`