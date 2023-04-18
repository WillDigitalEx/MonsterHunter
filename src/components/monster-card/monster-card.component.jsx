import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './monster-card.styles.scss';

const MonsterCard = ({ monster }) => {
    const { name, xp, index, type } = monster;
    const { addMonsterToCart } = useContext(CartContext);

    const addMonsterTooCart = () => addMonsterToCart(monster);
    const getDefaultImageUrl = (event) => {
        event.target.src = "/images/"+type.split(' ').join('-')+".jpg"
    }

    return (
        <div className="monster-card-container" key={index}>
            <div className="monster-card-image">
                <img src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            </div>
            <div className="monster-card-footer">
                <span className="monster-name">{name}</span>
                <span className="monster-price">{xp} Gold</span>
            </div>
            <Button
                buttonText="Add to Cart"
                buttonType = "default"
                buttonOptions= {{
                    type: 'button',
                    onClick: addMonsterTooCart,
                }}
            >
            </Button>
        </div>
    );
}

export default MonsterCard;