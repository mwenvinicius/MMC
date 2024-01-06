import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from '../components/ProductImage';
import ProductInformations from '../components/ProductInfo';
import styles from './ProductScreen.module.css';
import axios from 'axios';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';

function ProductScreen({match}){
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error,product } = productDetails; 
    useEffect(()=>{
        dispatch(listProductDetails(id));
    },[dispatch,id]);
    console.log(productDetails);

    return (
        <main>
            {loading ? (
                <Loader/>
            )
                : error ? (
                     <Message variant='danger'>{error}</Message>
                )
                :(
                    <div className={styles.BOX}>
                        <ProductImage image={product.imagem}/>
                        <ProductInformations INFOR={product} id={id}/>        
                    </div> 
                )
            }
        </main>
    )
}

export default ProductScreen;