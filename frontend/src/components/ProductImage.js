import React from 'react';
import styles from './ProductImage.module.css';

function ProductImage({image}) {
  return (
    <div className={styles.CardImage}>
        <img src={image}/>
    </div>
  )
}

export default ProductImage;