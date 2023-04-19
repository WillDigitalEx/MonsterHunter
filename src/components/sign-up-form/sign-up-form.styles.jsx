import styled from 'styled-components';
import theme from '../../theme';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    background: url(${theme.defaultDomain}/images/stat-block-top-texture.png), url(${theme.defaultDomain}/images/paper-texture.png);
    background-position: top;
    background-repeat: no-repeat, repeat;
    background-size: 100% auto;
    border: 2px solid #7f6c3c;
    box-shadow: 0 0 5px ${theme.mainColor};
    padding: 1rem;
`
export const SignUpTitle = styled.h2`
    margin: 0.6rem 0;
`