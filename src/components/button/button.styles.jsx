import styled from 'styled-components';
import theme from '../../theme';

export const BaseButton = styled.button`
  min-width: 2rem;
  width: auto;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 0.75rem 1.6rem;
  margin-top: auto;
  font-size: 1em;
  background-color: ${theme.defaultRed};
  color: ${theme.subColor};
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 2px solid ${theme.defaultRed};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${theme.darkRed};
    border: 2px solid ${theme.darkRed};
  }
`
export const GoogleSignIn = styled(BaseButton)`
  background-color: ${theme.subColor};
  border: 2px solid ${theme.mainColor};
  color: ${theme.mainColor};

  &:hover {
    background-color: ${theme.mainColor};
    color: ${theme.subColor};
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: ${theme.mainColor};
  color: ${theme.subColor};
  border: 2px solid ${theme.mainColor};

  &:hover {
    background-color: ${theme.defaultRed};
    color: ${theme.subColor};
    border: 2px solid ${theme.defaultRed};
  }
`
export const CardButton = styled(BaseButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  bottom: 45px !important;
  display: none;
`
  