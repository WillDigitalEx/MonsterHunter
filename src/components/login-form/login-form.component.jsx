import { useState } from "react";

import { 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { LoginContainer, LoginTitle, ButtonsContainer } from "./login-form.styles";

const defaultLoginFields = {
    email: '',
    password: '',
}

const LoginForm = () => {
    const [loginFields, setLoginFields] = useState(defaultLoginFields);
    const { email, password } = loginFields;
    
    const resetLoginForm = () => {
        setLoginFields(defaultLoginFields);
    }

    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();      
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setLoginFields({ ...loginFields, [name]: value });
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email,password);

            resetLoginForm();
        } catch (error) {
            if(error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                alert('Thou hast entered an invalid email or password')
            } else {
                console.log('Error logging in ', error.message);
            }
        }
    }
    return (
        <LoginContainer>
            <LoginTitle>Already hast an account?</LoginTitle>
            <span>Sign in with thy email and password or Google</span>
            <form onSubmit={handleLogin}>
                <FormInput 
                    label="Email"
                    inputOptions = {{
                        id: 'email',
                        name: 'email', 
                        type: 'email', 
                        onChange: handleChange,
                        value: email,
                        required: true,
                    }} 
                />

                <FormInput 
                    label="Password"
                    inputOptions = {{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        onChange: handleChange, 
                        value: password, 
                        required: true,
                    }}
                />
                <ButtonsContainer>
                    <Button
                        buttonText="Login"
                        buttonType = {BUTTON_TYPE_CLASSES.base}
                    >
                    </Button>
                    <Button
                        buttonText="Google Sign-In"
                        buttonType = {BUTTON_TYPE_CLASSES.google}
                        onClick = {SignInWithGoogle}
                    >
                    </Button>
                </ButtonsContainer>
            </form>
        </LoginContainer>
    )
}
export default LoginForm;