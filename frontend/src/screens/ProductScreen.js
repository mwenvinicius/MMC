import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Products'; /* Lista de Produtos. */
import Rating from '../components/Rating';
import Styles from '../components/Buttons.module.css';
import { useLocation } from 'react-router-dom';

function ProductScreen(){
    const { id } = useParams();
    const product = Products.find(p => p._id == id);
    /* console.log(product) */
    return (
        <div>
            <div>
                <div>
                    <img src={product.imagem}/>
                </div>
                <div>
                    <h1>{product.nome}</h1>
                    <Rating value={product.numAvalia} text={` ${product.avaliacoes} Avaliações`} color={'#DAA520'}/>
                    <br/>
                    <hr/>
                    <span>{product.descricao}</span>
                    <span>Código: {product.codigo}</span>
                    <span>Disponibilidade: EM ESTOQUE</span>
                    <h3>R$ {product.preco}</h3>
                    <button className={Styles.buttonThree}>ADICIONAR AO CARRINHO</button>
                    <button className={Styles.buttonThree}>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;