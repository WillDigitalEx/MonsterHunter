import styled from 'styled-components';
import theme from '../../theme';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 2.5rem;
  background-color: ${theme.mainColor};
`
export const LogoContainer = styled(Link)`
  height: 60px;
  width: 60px;
  border-radius: 35px;
  background-color: ${theme.subColor};
  padding: 0.4rem 0.4rem 0.4rem 0.65rem;
  margin: 0.3rem 0.7rem;
`
export const NavigationLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  color: ${theme.subColor};
  cursor: pointer;

  &:hover {
    color: ${theme.defaultRed}; 
  }
`

