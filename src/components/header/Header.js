import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo}  from '../../assets/images/crown.svg';
import './header.scss';
export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
             <Logo className='logo'/>
            </Link>
            <div className='options'>
             <Link className='' to="/shop">
             <span className='option'>SHOP</span>
             </Link>
             <Link className='' to="/shop">
                <span className='option'>CONTACT</span>
             </Link>
             <Link className='' to="/signin">
                <span className='option'>SIGN IN</span>
             </Link>
            </div>
        </div>
    )
}
