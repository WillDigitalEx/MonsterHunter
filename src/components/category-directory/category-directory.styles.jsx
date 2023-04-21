import styled from 'styled-components';
import theme from '../../theme';

export const DirectoryContainer = styled.div`
  padding: 1.25rem 2.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const HomeTitle = styled.h1`
  text-align:center;
  font-size: 3em;
  color: ${theme.defaultRed};
  text-shadow :  2px 2px 3px #000;
`