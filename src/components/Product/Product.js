import React from 'react';

const Product = (props) => {
  // console.log(props.product);
  const {name, img, price, stock} = props.product;
  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-['lightgray'] px-2 mr-2 mb-2 rounded-lg">
      <div className="w-[250px]">
      <img className="w-full h-full" src={img} alt=""/>
      </div>
      <h3>{name}</h3>
      <p className="text-[#063f64] font-bold">Price : {price}</p>
      <p>Stock : {stock}</p>
      <button className="text-[#063f64] font-semibold bg-orange-600 w-40 rounded-lg py-1 mt-auto mb-1 mt-3">Buy Now</button>
    </div>
  );
};

export default Product;