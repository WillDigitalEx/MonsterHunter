import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductTooCart = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="product-card-footer">
                <span className="product-name">{name}</span>
                <span className="product-price">{price} Gold</span>
            </div>
            <Button
                buttonText="Add to Cart"
                buttonType = "default"
                buttonOptions= {{
                    type: 'button',
                    onClick: addProductTooCart,
                }}
            >
            </Button>
        </div>
    );
}

export default ProductCard;