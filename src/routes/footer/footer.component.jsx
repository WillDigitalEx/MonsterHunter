import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { FooterContainer, FooterLink } from './footer.styles';

const Footer = () => (
    <Fragment>
        <FooterContainer>
            <FooterLink href='https://www.linkedin.com/in/wgoodwin77/' target='_blank'>Go to my LinkedIn</FooterLink>
            <FooterLink href='https://github.com/WillDigitalEx/' target='_blank'>Go to my GitHub</FooterLink>
        </FooterContainer>
        <Outlet />
    </Fragment>
);

export default Footer;