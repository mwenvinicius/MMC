import React from 'react';
import styles from './Product.module.css';
import Rating from './Rating';
import stylesBnt from './Buttons.module.css';

function Product({product}){
  return (
    <div className={styles.cardProduct}>
        <img src='/Products/Product-Spray.png'></img>
        <h3>Spray Uso Geral Vermelho 400ml ChemiColor Lorem Ipsum</h3>
        <div className={styles.price}>
            <span>R$ 20,00</span>
        </div>
        <Rating value={4.9} text={`(${47})`} color={'#DAA520'}/>
        <div className={styles.partInfer}>
            <button className={stylesBnt.buttonThree}>Comprar</button>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
  )
}

export default Product;