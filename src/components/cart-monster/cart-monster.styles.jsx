import styled from 'styled-components';

export const CartMonsterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 1rem;
`
export const MonsterImage = styled.img`
  width: 30%;
`
export const MonsterDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.625rem 1.25rem;
`
export const MonsterName = styled.span`
  font-size: 1em;
`
export const MonsterPrice = styled.span`
  font-size: 0.8em;
`