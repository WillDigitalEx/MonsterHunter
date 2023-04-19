import styled from 'styled-components';
import theme from '../../theme';

import { ReactComponent as CartIconImage } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
width: 45px;
  height: 45px;
  color: ${theme.subColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${theme.defaultRed};
    path {
        fill: ${theme.defaultRed} !important;
      }
    }
`
export const ShoppingCartIcon = styled(CartIconImage)`
  width: 24px;
  height: 24px;
`
export const MonsterCount = styled.span`
  position: absolute;
  font-size: 0.625em;
  font-weight: bold;
  bottom: 12px;
`