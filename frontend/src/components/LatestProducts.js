import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import Product from './Product';
import styles from './LatestProduct.module.css';

function LatestProducts({ProductsLatest}) {
  return ( 
    <div className={styles.cont}>
    
    {ProductsLatest.map(product =>(
    <Product informations={product} />))}
    </div>
  )
}

export default LatestProducts;