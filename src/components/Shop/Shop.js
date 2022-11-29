import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);


  useEffect(() =>{
    const fetchProducts = async () =>{
      try{
        const data = await fetch('products.json')
        const products = await data.json();

        setProducts(products);
      } catch(err){}
    };

    fetchProducts();

    // console.log(products);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-5 mb-5">Our Products</h1>
      <div className='flex flex-wrap my-5 container mx-auto'>
            {
              products.map(product => <Product
               key={product.id}
               // props
               product = {product}
              ></Product>)
            }
      </div>
    </div>
  );
};

export default Shop;