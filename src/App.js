import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [isShowCart, setIsShowChart] = useState(false);

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


  //Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      //Cart
      return [...prev, { ...product, amount: 1 }];
    });
  };

  return (
    <div className="App">
      <div className="bg-[#063f64]">
        <Header cart={cart} setIsShowCart ={setIsShowChart}/>
      </div>
      <div className='flex flex-wrap my-5 container mx-auto'>
            {
              products.map(product => <Product
              handleAddToCart = {handleAddToCart}
               key={product.id}
               // props
               product = {product}
              ></Product>)
            }
      </div>

      {isShowCart && 
      <Cart 
      cart={cart} 
      isShowCart = {setIsShowChart} />}
    </div>
  );
}

export default App;
