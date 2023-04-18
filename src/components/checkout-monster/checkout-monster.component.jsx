import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-monster.styles.scss';

const CheckoutMonster = ({ cartMonster }) => {
    const { name, index, xp, type, quantity } = cartMonster;

    const { clearMonsterFromCart, addMonsterToCart, removeMonsterFromCart  } = useContext(CartContext);

    const clearMonsterHandler = () => clearMonsterFromCart(cartMonster);
    const addMonsterHandler = () => addMonsterToCart(cartMonster);
    const removeMonsterHandler = () => removeMonsterFromCart(cartMonster);

    const getDefaultImageUrl = (event) => {
        event.target.src = "/images/"+type.split(' ').join('-')+".jpg"
    }

    return (
        <div className='checkout-monster-container'>
            <div className='image-container'>
                <img src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' title='Reduce the number of requested monsters' onClick={removeMonsterHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' title='Increase the number of requested monsters' onClick={addMonsterHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{xp}G</span>
            <div className='remove-button' onClick={clearMonsterHandler}>
                &#10005;
            </div>
        </div>
    )

}

export default CheckoutMonster;