import React from 'react';
import Slide from '../components/Slide';
import MainCategories from '../components/MainCategories';
import ProductsFirst from '../components/ProductsFirst';
import Brands from '../components/Brands';
import Promotions from '../components/Promotions';
import Contact from '../components/Contact';

function HomeScreen() {
  return (
    <div>
        <Slide/>
        <MainCategories/>
        <ProductsFirst/>
        <Brands/>
        <Promotions/>
        <Contact/>
    </div>
  )
}

export default HomeScreen;