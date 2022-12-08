import { signInWithGooglePopup, createUserFromAuth } from "../../utils/firebase/firebase.utils";

const Login = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserFromAuth(user);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default Login;