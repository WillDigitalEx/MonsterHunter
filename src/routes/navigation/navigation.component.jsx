import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavigationLinks, NavLink  } from './navigation.styles';

import {ReactComponent as DragonLogo } from '../../assets/dragon-logo.svg';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <DragonLogo />
            </LogoContainer>
            <NavigationLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>LOGOUT</NavLink> 
                    ) : (
                        <NavLink to='/login'>
                            LOGIN
                        </NavLink>
                    )}
                <CartIcon />
            </NavigationLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;