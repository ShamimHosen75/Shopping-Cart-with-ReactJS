import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";


const Cart = ({setIsShowCart, cart, handleAddToCart, handleRemoveFromCart}) => {


  let total = 0;
    for ( const product of cart) {
        total = total + product.price;
    }
    const tax = parseFloat ((total * 0.1).toFixed (2));
    const grandTotal = total + tax;

  // const cartRef = useRef();
  // const total = (arr) => {
  //   return arr.reduce((cal, item, tax) => {
  //     return cal + item.price * item.amount + tax;
  //   }, 0);
  // };

  const DollarUsd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="fixed inset-0 bg-[0,0,0,0.7]" onClick={()=> setIsShowCart(false)}>
       <div onClick={e=>e.stopPropagation()} className="bg-white w-[250px] h-full absolute right-0 overflow-y-scroll py-2">
          <h1 className="bg-[#063f64] text-white font-semibold text-center py-2 -mt-2">Cart</h1>
          <div className="flex flex-col items-center px-2">
            {cart.map(item =>(
              <div 
                key={item.id}
                className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center" >
              <img className="w-[130px] h-[130px]" src={item.img} alt={item.name} />
              <p className="text-white text-sm font-semibold w-5 h-5 rounded-full bg-[#063f64]">
                {item.amount}
              </p>
              <h3 className="text-[0.8rem] font-bold">{item.name}</h3>
              <div className="flex items-center my-3">
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <AiOutlineMinusSquare className="text-[25px] text-gray-500"/>
                </button>
                <p className="text-[#063f64] font-bold mb-2 mx-2">{DollarUsd.format(item.price)}</p>
                <button onClick={() => handleAddToCart(item)}>
                  <AiOutlinePlusSquare className="text-[25px] text-gray-500"/>
                </button>
              </div>
              
            </div>
            ))}

            <p className="font-semibold mb-3">Seleted Items : {cart.length}</p>
            <p className="font-semibold mb-3">Total Price : {DollarUsd.format(total)}</p>
            <p className="font-semibold mb-3">Tax : {DollarUsd.format(tax)}</p>
            <h5 className="text-lg font-bold mb-3">Grand Total : {DollarUsd.format(grandTotal.toFixed(2))}</h5>
            
            {/* <p className="font-bold mb-3">Sub Total : {DollarUsd.format(total(cart))}</p>
            <p className="font-bold mb-3">Tax : {DollarUsd.format(total(tax))}</p>
            <h5 className="font-bold mb-3">Grand Total : {DollarUsd.format(grandTotal.toFixed(2))}</h5> */}
          </div>
       </div>
    </div>
  );
};

export default Cart;