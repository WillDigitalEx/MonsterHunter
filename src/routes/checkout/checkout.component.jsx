import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutMonster from '../../components/checkout-monster/checkout-monster.component';


import './checkout.styles.scss';


const Checkout = () => {
    const { cartMonsters, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Monster</span>
                </div>
                <div className='header-block'>
                    <span>Name</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartMonsters.map((cartMonster) => (
                <CheckoutMonster key={cartMonster.id} cartMonster={cartMonster}/>
            ))}
            <span className='total'>
                Total: {cartTotal} Gold
            </span>    
        </div>
    )
}

export default Checkout;