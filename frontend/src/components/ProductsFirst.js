import React, {useEffect, useState} from 'react';
import Product from './Product';
import Glider from 'glider-js';
import Styles from './ProductsFirst.module.css';
import axios from 'axios';
import Products from '../Products';

function ProductsFirst(){
  const [products, setProducts] = useState([])
  useEffect(() => { 
  
      try{  
      new Glider(document.querySelector('.glider'), {
        slidesToScroll: 4,
        slidesToShow: 4,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });
      /* fetchProducts(); */
      }
      catch(err){
        console.log('Erro!')
      }
      /* async function fetchProducts(){
        try{
          const {data} = await axios.get('http://127.0.0.1:8000/api/products/');
          setProducts(data);
        }
        catch(err){
          console.log('Erro!')
        }
      } */
      
  }, []);
  return (
    <div className={Styles.p_slider}>
      <h3 className={Styles.p_slider_Title}>Top Produtos</h3>
      <div class="glider-contain">
        <div class="glider">
          {Products.map(product =>(
            <Product informations={product}/>
          ))}
        </div>
        <button aria-label="Previous" class="glider-prev">«</button>
        <button aria-label="Next" class="glider-next">»</button>
        <div role="tablist" class="dots"></div>
      </div>
    </div>
  )
}

export default ProductsFirst;