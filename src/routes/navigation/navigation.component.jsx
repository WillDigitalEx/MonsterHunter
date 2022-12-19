import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
import {ReactComponent as DragonLogo } from '../../assets/dragon-logo.svg';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    return (
      <Fragment>
        <div className='navigation'>
            <Link className="logo" to='/'>
                <DragonLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>LOGOUT</span> 
                    ) : (
                        <Link className='nav-link' to='/login'>
                            LOGIN
                        </Link>
                    )}
                
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;