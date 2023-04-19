import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
    CheckoutMonsterContainer, 
    MonsterImageContainer, 
    MonsterImage, 
    MonsterData, 
    MonsterQuantity, 
    QuantityArrow, 
    QuantityValue, 
    RemoveMonsterButton
} from './checkout-monster.styles';

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
        <CheckoutMonsterContainer>
            <MonsterImageContainer>
                <MonsterImage src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            </MonsterImageContainer>
            <MonsterData>{name}</MonsterData>
            <MonsterQuantity>
                <QuantityArrow title='Reduce the number of requested monsters' onClick={removeMonsterHandler}>
                    &#10094;
                </QuantityArrow>
                <QuantityValue>{quantity}</QuantityValue>
                <div className='arrow' title='Increase the number of requested monsters' onClick={addMonsterHandler}>
                    &#10095;
                </div>
            </MonsterQuantity>
            <MonsterData>{xp}G</MonsterData>
            <RemoveMonsterButton onClick={clearMonsterHandler}>
                &#10005;
            </RemoveMonsterButton>
        </CheckoutMonsterContainer>
    )

}

export default CheckoutMonster;