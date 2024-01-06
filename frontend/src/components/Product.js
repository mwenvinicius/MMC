import React from 'react';
import styles from './Product.module.css';
import Rating from './Rating';
import stylesBnt from './Buttons.module.css';
import { Link } from 'react-router-dom';

function Product({informations}){
  return (
    <div className={styles.cardProduct}>
        <Link to={`/product/${informations._id}`}>
          <img src={informations.imagem}></img>
          <h3>{informations.nome}</h3>
          <div className={styles.price}>
              <span>R$ {informations.preco}</span>
          </div>
          <Rating value={informations.numAvalia} text={`(${informations.avaliacoes})`} color={'#DAA520'}/>
          <div className={styles.partInfer}>
              <button className={stylesBnt.buttonThree}>Comprar</button>
              <i class="fa-solid fa-heart"></i>
              <a href={`/product/${7}`}>
                <i class="fa-solid fa-cart-shopping"></i>
              </a>
              
          </div>
        </Link>
    </div>
  )
}

export default Product;