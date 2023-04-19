import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { CardImageContainer, CardImage, MonsterCardContainer, CardFooter, MonsterName, MonsterPrice } from './monster-card.styles';

const MonsterCard = ({ monster }) => {
    const { name, xp, index, type } = monster;
    const { addMonsterToCart } = useContext(CartContext);

    const addMonsterTooCart = () => addMonsterToCart(monster);
    const getDefaultImageUrl = (event) => {
        event.target.src = "/images/"+type.split(' ').join('-')+".jpg"
    }

    return (
        <MonsterCardContainer key={index} onClick={addMonsterTooCart}>
            <CardImageContainer>
                <CardImage src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            </CardImageContainer>
            <CardFooter>
                <MonsterName>{name}</MonsterName>
                <MonsterPrice>{xp} Gold</MonsterPrice>
            </CardFooter>
            <Button
                buttonText="Add to Cart"
                buttonType = {BUTTON_TYPE_CLASSES.card}
                onClick={addMonsterTooCart}
            >
            </Button>
        </MonsterCardContainer>
    );
}

export default MonsterCard;