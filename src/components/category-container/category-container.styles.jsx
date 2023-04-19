import styled from 'styled-components';
import theme from '../../theme';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`
export const CategoriesContainer = styled.div`
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  min-width: 30%;

  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    } 
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`

export const CategoryBody = styled.div`
  height: 6rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  position: absolute;
  background: url(${theme.defaultDomain}/images/stat-block-top-texture.png),url(${theme.defaultDomain}/images/paper-texture.png);
  background-position: top;
  background-repeat: no-repeat,repeat;
  background-size: 100% auto;
  border: 2px solid #3b3838;
  box-shadow: 0 0 5px #3b3838;
  &:hover {
    opacity: 0.9;
  }
`
export const CategoryTitle = styled.h2`
  font-weight: bold;
  margin: 0.8rem 0.4rem 0;
  font-size: 1.2em;
  color: #4a4a4a;
`
export const CategoryText = styled.p`
  font-weight: lighter;
  font-size: 1em;
`