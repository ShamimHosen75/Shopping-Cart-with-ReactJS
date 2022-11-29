import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <nav className='header bg-[#063f64] py-1 px-2'>
            <img src={logo}alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
            </div>
            <div className='relative'>
              <AiOutlineShoppingCart className='text-2xl'/>
              <span className='bg-blue-500 text-black w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5'>0</span>
            </div>
        </nav>
  );
};

export default Header;