import { useState } from "react";

import { 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './login-form.styles.scss';

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
        <div className='login-container'>
            <h2>Already hast an account?</h2>
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
                <div className='buttons-container'>
                    <Button
                        buttonText="Login"
                        buttonType = "default"
                        buttonOptions= {{
                            type: 'submit',
                        }}
                    >
                    </Button>
                    <Button
                        buttonText="Google Sign-In"
                        buttonType = "google"
                        buttonOptions= {{
                            type: 'button',
                            onClick: SignInWithGoogle,
                        }}
                    >
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;