import { BaseButton, GoogleSignIn, InvertedButton, CardButton } from './button.styles.jsx';
/*
default
inverted
google sign in
*/
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    card: 'card-button'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.card]: CardButton,

    }[buttonType]
)
const Button = ({ buttonText, buttonType, ...buttonOptions }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...buttonOptions}>{buttonText}</CustomButton>
    )
}

export default Button;