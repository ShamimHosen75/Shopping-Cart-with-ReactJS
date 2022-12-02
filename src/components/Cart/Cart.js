import React from 'react';
import { AiOutlineDelete, AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";


const Cart = ({ setIsShowCart, cart, handleAddToCart, handleRemoveFromCart }) => {

  console.log("carted items", cart);
  let total = 0;
  let grandTotal = 0;
  let tax = 0;
  for (const product of cart) {
    total = total + product.price * product.quantity;
    if (product?.category === "IPhone") {
      tax = parseFloat((total * 0.02).toFixed(2));
    } else {
      console.log("That's not an iphone")
      tax = parseFloat((total * 0.05).toFixed(2));
    }
  }
  grandTotal = total + tax;

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
    <div className="fixed inset-0" onClick={()=> setIsShowCart(false)}>
       <div onClick={e=>e.stopPropagation()} className="bg-white w-[250px] h-full absolute right-0 overflow-y-scroll py-2">
          <h1 className="bg-[#063f64] text-white font-semibold text-center py-2 -mt-2"> Shopping Cart</h1>
          <div className="flex flex-col items-center px-2">
            {cart.map(item =>(
              <div 
                key={item.id}
                className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center" >
              <img className="w-[130px] h-[130px]" src={item.img} alt={item.name} />
              <p className="text-white text-sm font-semibold w-5 h-5 rounded-full bg-[#063f64]">
                {item.quantity}
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
                <button onClick={() => handleRemoveFromCart(item.id)}>
                <AiOutlineDelete className="text-[40px] items-center pl-4 text-[#063f64]"/>
                </button>
                
              </div>
              
            </div>
            ))}

          <p className="font-semibold mb-3">Seleted Items : {cart.length}</p>
          <p className="font-semibold mb-3">Sub Total : {DollarUsd.format(total)}</p>
          <p className="font-semibold mb-3">Tax : {DollarUsd.format(tax)}</p>
          <h5 className="text-lg font-bold mb-3">Grand Total : {DollarUsd.format(grandTotal.toFixed(2))}</h5>
          </div>
       </div>
    </div>
  );
};

export default Cart;