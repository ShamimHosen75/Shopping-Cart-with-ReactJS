import React from 'react';

const Cart = ({setIsShowCart, cart, handleAddToCart}) => {
  return (
    <div className="fixed inset-0 bg-[0,0,0,0.7]" onClick={()=> setIsShowCart(false)}>
       <div onClick={e=>e.stopPropagation()} className="bg-white w-[250px] h-full absolute right-0">
          <h1 className="bg-[#063f64] text-white font-semibold text-center py-2">Cart</h1>
          <div className="flex flex-col items-center">
            {cart.map(item =>(
              <div key={item.id}>
              <img src={item.img} alt={item.name} />
            </div>
            ))}

          </div>
       </div>
    </div>
  );
};

export default Cart;