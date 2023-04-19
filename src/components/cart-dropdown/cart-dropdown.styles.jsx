import styled from 'styled-components';
import theme from '../../theme';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid ${theme.mainColor};
  background-color: ${theme.subColor};
  top: 69px;
  right: 40px;
  z-index: 5;
`
export const EmptyMessage = styled.span`
  font-size: 1.125em;
  margin: 3.125rem auto;
  text-align: center;
`
export const CartMonsters = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgb(197 0 9 / 90%);
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
`
export const CloseCartLink = styled.span`
  font-size: 0.75em;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${theme.defaultRed};
  }
`