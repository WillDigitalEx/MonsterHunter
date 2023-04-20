import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserFromAuth } from "../../utils/firebase/firebase.utils";

import { SignUpContainer, SignUpTitle } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetSignUpForm = () => {
        setFormFields(defaultFormFields);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword ) {
            alert("Paswords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserFromAuth(user, { displayName });
            resetSignUpForm();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('User already exists.');
            } else {
                console.log('User not created', error);
            }
            
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>Doth not hast an account?</SignUpTitle>
            <span>Sign up with thy email and password</span>
            <form onSubmit={handleSignUp}>
                <FormInput 
                    label="Display Name"
                    inputOptions = {{
                        id: 'displayName',
                        name: 'displayName',
                        type: 'text',
                        onChange: handleChange,
                        value: displayName,
                        required: true, 
                    }}
                />

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

                <FormInput 
                    label="Confirm Thy Password"
                    inputOptions = {{
                        id: 'confirmPassword', 
                        name: 'confirmPassword', 
                        type: 'password',
                        onChange: handleChange, 
                        value: confirmPassword, 
                        required: true,
                    }}
                />

                <Button
                    buttonText="Sign Up"
                    buttonType = {BUTTON_TYPE_CLASSES.base}
                >
                </Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;