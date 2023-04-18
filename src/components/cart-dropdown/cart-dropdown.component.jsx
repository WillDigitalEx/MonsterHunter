import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartMonster from '../cart-monster/cart-monster.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartMonsters } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-monsters'>
                {cartMonsters.map(monster => 
                    (<CartMonster key={monster.index} cartMonster={monster} />
                ))}
            </div>
            <Button
                        buttonText="Check Out"
                        buttonType = "inverted" //options: default, inverted, google
                        buttonOptions= {{
                            type: 'button',
                            onClick: goToCheckout,
                        }}
                    >
            </Button>
        </div>
    )
}

export default CartDropdown;