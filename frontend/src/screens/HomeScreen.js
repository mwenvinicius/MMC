import React, { useEffect } from 'react';
import Slide from '../components/Slide';
import MainCategories from '../components/MainCategories';
import ProductsFirst from '../components/ProductsFirst';
import Brands from '../components/Brands';
import Promotions from '../components/Promotions';
import Contact from '../components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import LatestProducts from '../components/LatestProducts';
import Loader from '../components/Loader';
import Message from '../components/Message';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { error, loading, products } = productList; 
  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);
  return (
    <div>
      
        {/* <Slide/> */}
        <MainCategories/>
        <ProductsFirst/>
        <Brands/>
        <Promotions/>
        <Contact/>
    </div>
  )
}

export default HomeScreen;