import styled from 'styled-components';
import theme from '../../theme';

export const CardImageContainer = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 0.3125rem;
  background-color: ${theme.subColor};
  padding-top: 1rem;
  cursor: pointer;
  border-bottom: solid 2px #b38600;
  border-right: solid 2px #b38600;
  border-top: solid 2px #ffbf00;
  border-left: solid 2px #ffbf00;
` 
export const CardImage = styled.img`
  width: 95%;
  height: 95%;
  object-fit: contain;
  display: block;
  margin: auto;
`
export const MonsterCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }
`
export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  padding: 0 1rem;
`
export const MonsterName = styled.span`
  width: 70%;
  margin-bottom: 1rem;
`
export const MonsterPrice = styled.span`
  width: 30%;
  text-align: right;
`
  