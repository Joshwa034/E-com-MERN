import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/homepage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDeatils from './customer/components/ProductDetails/ProductDeatils';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';





function App() {
  return (
    <div className="">
      <Navigation/>
    
      <div>
        {/* <Homepage/> */}
        {/* <Product/> */}
        {/* <ProductDeatils/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
