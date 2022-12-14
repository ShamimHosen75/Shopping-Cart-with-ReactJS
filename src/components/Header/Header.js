import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = ({setIsShowCart, cart}) => {
  return (
    <nav className='header bg-[#063f64] py-1 px-2'>
            <img src={logo}alt="" />
            <div className="text-xl font-semibold">
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/Blog">Blog</a>
            </div>
            <div className='relative mt-5' onClick={() => setIsShowCart(true)}>
              <AiOutlineShoppingCart className='text-2xl text-white'/>
              {cart?.length > 0 && (
                <span className='bg-orange-600 text-[#063f64] w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5'>
                  {cart?.length}</span>
              )};
              
            </div>
        </nav>
  );
};

export default Header;