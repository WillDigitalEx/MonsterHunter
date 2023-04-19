import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartMonster from '../cart-monster/cart-monster.component';

import { CartDropdownContainer, CartMonsters, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartMonsters } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartMonsters>
                {
                    cartMonsters.length ? (cartMonsters.map(monster => 
                        (<CartMonster key={monster.index} cartMonster={monster} />
                    ))) : (
                        <EmptyMessage>You have not added any monsters</EmptyMessage>
                    )
                }
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