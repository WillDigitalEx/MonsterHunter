import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button
                        buttonText="Check Out"
                        buttonType = "inverted" //options: default, inverted, google
                        buttonOptions= {{
                            type: 'button',
                        }}
                    >
            </Button>
        </div>
    )
}

export default CartDropdown;