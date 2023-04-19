import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutMonster from '../../components/checkout-monster/checkout-monster.component';


import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from "./checkout.styles";


const Checkout = () => {
    const { cartMonsters, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Monster</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Name</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartMonsters.map((cartMonster) => (
                <CheckoutMonster key={cartMonster.index} cartMonster={cartMonster}/>
            ))}
            <CheckoutTotal>
                Total: {cartTotal} Gold
            </CheckoutTotal>    
        </CheckoutContainer>
    )
}

export default Checkout;