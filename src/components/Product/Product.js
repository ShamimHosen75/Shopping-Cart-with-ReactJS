import React from 'react';

const Product = ({product, handleAddToCart}) => {
  // console.log(props.product);
  const {name, img, price, stock, brand,} = product;

  const DollarUsd = new Intl.NumberFormat('en-us', {
    style : 'currency',
    currency : 'USD',
  });

  

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-['lightgray'] px-2 mr-3 mb-3 rounded-lg">
      <div className="w-[250px]">
      <img className="w-full h-full" src={img} alt=""/>
      </div>
      <h3 className='text-xl font-semibold'>{name}</h3>
      <p className="text-[#063f64] font-bold text-lg">Price : {DollarUsd.format(price)}</p>
      <p className='font-semibold'>Stock : {stock}</p>
      <p className='font-semibold'>Brand : {brand}</p>
      <button 
      onClick={() => handleAddToCart(product)}
      className="text-orange-500 font-semibold bg-[#063f64] w-40 rounded-lg py-1 mb-3 mt-5 hover:bg-orange-500 hover:text-[#063f64] hover:scale-x-105">
        Buy Now</button>
    </div>
  );
};

export default Product;