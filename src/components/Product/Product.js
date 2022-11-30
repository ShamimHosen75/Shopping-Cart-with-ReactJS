import React from 'react';

const Product = ({product, handleAddToCart}) => {
  // console.log(props.product);
  const {name, img, price, stock, brand} = product;

  const DollarUsd = new Intl.NumberFormat('en-us', {
    style : 'currency',
    currency : 'USD',
  });

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-['lightgray'] px-2 mr-2 mb-2 rounded-lg">
      <div className="w-[250px]">
      <img className="w-full h-full" src={img} alt=""/>
      </div>
      <h3 className='text-xl font-semibold'>{name}</h3>
      <p className="text-[#063f64] font-bold text-lg">Price : {DollarUsd.format(price)}</p>
      <p className='font-semibold'>Stock : {stock}</p>
      <p className='font-semibold'>Brand : {brand}</p>
      <button 
      onClick={() => handleAddToCart(product)}
      className="text-[#063f64] font-semibold bg-orange-600 w-40 rounded-lg py-1 mb-2 mt-3 hover:bg-[#063f64] hover:text-orange-500 hover:scale-x-105">
        Buy Now</button>
    </div>
  );
};

export default Product;