import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as DragonLogo } from '../../assets/dragon-logo.svg';

const Navigation = () => {
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
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;