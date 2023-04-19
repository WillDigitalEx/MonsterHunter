import { CartMonsterContainer, MonsterImage, MonsterDetails, MonsterName, MonsterPrice } from './cart-monster.styles';

const CartMonster = ({ cartMonster }) => {
    const { name, index, xp, type, quantity } = cartMonster;
    const getDefaultImageUrl = (event) => {
        event.target.src = "/images/"+type.split(' ').join('-')+".jpg"
    }

    return (
        <CartMonsterContainer key={index}>
            <MonsterImage src={`/images/${index.replace("adult-", "").replace("ancient-", "").replace("young-", "").replace("-wyrmling", "")}.jpg`} onError={getDefaultImageUrl} alt={`${name}`} />
            <MonsterDetails>
                <MonsterName>{name}</MonsterName>
                <MonsterPrice>{quantity} x {xp}G</MonsterPrice>
            </MonsterDetails>
        </CartMonsterContainer>
    )
}

export default CartMonster;