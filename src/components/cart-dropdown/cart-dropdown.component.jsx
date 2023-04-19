import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartMonster from '../cart-monster/cart-monster.component';

import { CartDropdownContainer, CartMonsters } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartMonsters } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartMonsters>
                {cartMonsters.map(monster => 
                    (<CartMonster key={monster.index} cartMonster={monster} />
                ))}
            </CartMonsters>
            <Button
                        buttonText="Check Out"
                        buttonType = "inverted" //options: default, inverted, google
                        buttonOptions= {{
                            type: 'button',
                            onClick: goToCheckout,
                        }}
                    >
            </Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;