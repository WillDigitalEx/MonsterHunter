import { createContext, useState, useEffect } from "react";

const addCartMonster = (cartMonsters, monsterToAdd) => {
    const existingCartMonster = cartMonsters.find(
        (cartMonster) => cartMonster.index === monsterToAdd.index
    );

    if(existingCartMonster) {
        return cartMonsters.map((cartMonster) => cartMonster.index === monsterToAdd.index ?
            {...cartMonster, quantity: cartMonster.quantity + 1}
            : cartMonster
        );
    }
    return [...cartMonsters, { ...monsterToAdd, quantity: 1 } ];
}

const removeCartMonster = (cartMonsters, cartMonsterToRemove) => {
    const existingCartMonster = cartMonsters.find(
        (cartMonster) => cartMonster.index === cartMonsterToRemove.index
    );

    if(existingCartMonster.quantity === 1) {
        return cartMonsters.filter(cartMonster => cartMonster.index !== cartMonsterToRemove.index);
    } 

    return cartMonsters.map((cartMonster) => cartMonster.index === cartMonsterToRemove.index ?
            {...cartMonster, quantity: cartMonster.quantity - 1}
            : cartMonster
        );
    
}

const clearCartMonster = (cartMonsters, cartMonsterToClear) => cartMonsters.filter(cartMonster => cartMonster.index !== cartMonsterToClear.index);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartMonsters: [],
    addMonsterToCart: () => {},
    removeMonsterFromCart: () => {},
    clearMonsterFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartMonsters, setCartMonsters] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartMonsters.reduce((total, cartMonster) => total + cartMonster.quantity, 0);
        setCartCount(newCartCount);
    }, [cartMonsters]);

    useEffect(() => {
        const newCartTotal = cartMonsters.reduce((total, cartMonster) => total + cartMonster.quantity * cartMonster.xp, 0);
        setCartTotal(newCartTotal);
    }, [cartMonsters]);

    const addMonsterToCart = (monsterToAdd) => {
        setCartMonsters(addCartMonster(cartMonsters, monsterToAdd));
    }
    const removeMonsterFromCart = (cartMonsterToRemove) => {
        setCartMonsters(removeCartMonster(cartMonsters, cartMonsterToRemove));
    }

    const clearMonsterFromCart = (cartMonsterToClear) => {
        setCartMonsters(clearCartMonster(cartMonsters, cartMonsterToClear));
    }
    const value = {isCartOpen, setIsCartOpen, addMonsterToCart, removeMonsterFromCart, clearMonsterFromCart, cartMonsters, cartCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}