import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/product/:id' element={<ProductScreen/>}/>
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='/cart/:id?' element={<CartScreen/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
