import React from 'react';

const Cart = ({setIsShowCart, cart, handleAddToCart}) => {
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
              <h3 className="text-[0.8rem] font-bold">{item.name}</h3>
              <p className="text-[#063f64] font-bold mb-2">{item.price}</p>
            </div>
            ))}

          </div>
       </div>
    </div>
  );
};

export default Cart;