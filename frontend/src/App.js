import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Slide from './components/Slide';
import MainCategories from './components/MainCategories';
import Product from './components/Product';
import ProductsFirst from './components/ProductsFirst';
import Brands from './components/Brands';
import Promotions from './components/Promotions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slide/>
      <MainCategories/>
      <ProductsFirst/>
      <Brands/>
      <Promotions/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
