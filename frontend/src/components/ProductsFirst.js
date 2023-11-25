import React, {useEffect} from 'react';
import Product from './Product';
import Glider from 'glider-js';
import Styles from './ProductsFirst.module.css';

function ProductsFirst(){
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
    }
      catch(err){
        console.log('Erro!')
      }
  }, []);
  return (
    <div className={Styles.p_slider}>
      <h3 className={Styles.p_slider_Title}>Top Produtos</h3>
      <div class="glider-contain">
        <div class="glider">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
        <button aria-label="Previous" class="glider-prev">«</button>
        <button aria-label="Next" class="glider-next">»</button>
        <div role="tablist" class="dots"></div>
      </div>
    </div>
  )
}

export default ProductsFirst;