import styled from 'styled-components';
import theme from '../../theme';

export const CheckoutMonsterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  min-height: 100px;
  border-bottom: 1px solid ${theme.mainColor};
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const MonsterImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`
export const MonsterImage = styled.img`
  width: auto;
  height: 100%;
  max-height: 80px;
`
export const MonsterData = styled.span`
  width: 23%;
`
export const MonsterQuantity = styled.span`
  width: 23%;
  display: flex;
`
export const QuantityArrow = styled.div`
  cursor: pointer;
`
export const QuantityValue = styled.span`
  margin: 0 0.625rem;
`
export const RemoveMonsterButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
  