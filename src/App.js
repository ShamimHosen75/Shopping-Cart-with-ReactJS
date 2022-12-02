import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isShowCart, setIsShowChart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('products.json')
        const products = await data.json();

        setProducts(products);
      } catch (err) { }
    };

    fetchProducts();

    // console.log(products);
  }, []);


  //Handle Add to Cart
  const handleAddToCart = (product) => {
    if (product?.quantity < product?.stock) {
      setCart((prev) => {
        const findProductInCart = prev.find((item) => item.id === product.id);
        // console.log(product);
        if (findProductInCart) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        // console.log("findProductInCart", findProductInCart)
        //Cart
        return [...prev, { ...product, quantity: 1 }];
        // console.log("product after if condition", product);
      });
    } else {
      return toast.error("Items not more than stock!")
    }
  };


  //Handle Remove from Cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return cal;

          return [...cal, { ...item, quantity: item.quantity - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  console.log(cart);

  return (
    <div className="App">
      <div className="bg-[#063f64]">
        <Header cart={cart} setIsShowCart={setIsShowChart} />
      </div>
      <h2 className="text-3xl text-[#063f64] font-bold py-5 text-left pl-16">Our Products</h2>
      <hr className='border-4 border-opacity-0 border-b-gray-700 w-40 ml-16' />
      <div className='flex flex-wrap my-5 container mx-auto'>
        {
          products.map(product => <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            // props
            product={product}
          ></Product>)
        }
      </div>

      {isShowCart &&
        <Cart
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          isShowCart={setIsShowChart} />}

      {/* Footer  */}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
