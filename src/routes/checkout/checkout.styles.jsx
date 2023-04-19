import styled from 'styled-components';
import theme from '../../theme';

export const CheckoutContainer = styled.div`
  width: 80%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding: 1.25rem 2.5rem;
  background: url(${theme.defaultDomain}/images/stat-block-top-texture.png), url(${theme.defaultDomain}/images/paper-texture.png);
  background-position: top;
  background-repeat: no-repeat, repeat;
  background-size: 100% auto;
  border: 2px solid #7f6c3c;
  box-shadow: 0 0 5px #333333;
`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-weight: bold;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`
export const CheckoutTotal = styled.span`
  margin-top: 1.875rem;
  margin-left: auto;
  font-size: 2.25em;
`