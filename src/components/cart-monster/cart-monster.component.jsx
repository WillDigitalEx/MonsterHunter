import './cart-monster.styles.scss';

const CartMonster = ({ cartMonster }) => {
    const { name, index, xp, type, quantity } = cartMonster;
    const getDefaultImageUrl = (event) => {
        event.target.src = "/images/"+type.split(' ').join('-')+".jpg"
    }

    return (
        <div className='cart-monster-container' key={index}>
            <img src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            <div className='monster-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {xp}G</span>
            </div>
        </div>
    )
}

export default CartMonster;