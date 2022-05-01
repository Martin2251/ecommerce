import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar-container'><p className='logo'><Link href="/">Martin Headphones</Link></p><buttom type="button" className="cart-icon" onclick=""><AiOutlineShopping /><span className='cart-item-qty'>1</span></buttom></div>
  )
}

export default Navbar