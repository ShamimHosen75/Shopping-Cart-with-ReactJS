import React from 'react';

const Product = (props) => {
  // console.log(props.product);
  const {name, img, price} = props.product;
  return (
    <div>
      <div>
      <img src={img} alt=""/>
      </div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;