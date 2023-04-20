import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES }  from '../button/button.component';
import CartMonster from '../cart-monster/cart-monster.component';

import { CartDropdownContainer, CartMonsters, EmptyMessage, CloseCartLink } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartMonsters } = useContext(CartContext);
    const navigate = useNavigate();
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const goToCheckout = () => {
        navigate('/checkout');
        toggleIsCartOpen();
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
                        buttonType = {BUTTON_TYPE_CLASSES.inverted}//options: default, inverted, google
                        onClick ={goToCheckout}
                    >
            </Button>
            <br />
            <CloseCartLink
                onClick ={toggleIsCartOpen}
                    >
                Close Cart
            </CloseCartLink>
        </CartDropdownContainer>
    )
}

export default CartDropdown;