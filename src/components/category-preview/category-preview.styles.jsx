import styled from 'styled-components';
//import theme from '../../theme';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.875rem;
  padding: 1.25rem 2.5rem;
`
export const CatPreviewTitle = styled.h2`
  padding: 0;
  font-size: 1.75em;
  margin-bottom: 1.5625rem;
  cursor: pointer;
`
export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
`