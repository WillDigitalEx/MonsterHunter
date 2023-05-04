import { Fragment } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import LoginForm from '../../components/login-form/login-form.component';

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
    return (
        <Fragment>
        <AuthenticationContainer>
            <LoginForm />
            <SignUpForm />
        </AuthenticationContainer>
        </Fragment>
    )
}

export default Authentication;