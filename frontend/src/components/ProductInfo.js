import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductInfo.module.css';
import Styles from '../components/Buttons.module.css';
import {ListGroup,Form,Row,Col} from 'react-bootstrap';
import Rating from './Rating';

function ProductInfo({INFOR,history,id}) {
  const productId = useParams();
  let navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const addToCartHandler = () =>{
    navigate(`/cart/${productId.id}?qty=${qty}`)
  }
  return (
    <div className={styles.CardInfo}>
      <h1 className={styles.titleOfProduct}>{INFOR.nome}</h1>
      <Rating value={INFOR.mediaAvaliacoes} text={` ${INFOR.avaliacoes} Avaliações`} color={'#DAA520'}/>
      <div className={styles.line}></div>
      <div className={styles.boxInformation}>
        <div className={styles.descriptionOfProduct}>{INFOR.descricao}</div>
        <div className={styles.informations}>Código: {INFOR.codigo}</div>
        <div className={styles.informations}>Disponibilidade: {INFOR.qntEstoque > 0 ? 'Em Estoque' : 'Não Disponível'}</div>
      </div>
      <h3 className={styles.priceOfProduct}>R$ {INFOR.preco}</h3>
      
      {INFOR.qntEstoque > 0 && (
        <ListGroup >
          <ListGroup.Item>
            <Row xl={'auto'} className="align-items-center justify-content-center">
              <Col><p className={styles.Ali}>QUANTIDADE</p></Col>
              <Col xs='auto' className='my-1'> 
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e)=>setQty(e.target.value)}
                >
                  {
                    [...Array(INFOR.qntEstoque).keys()].map((x) => (
                      <option key={x+1} value={x+1}>
                        {x + 1}
                      </option>
                    ))
                  }
                </Form.Control>
              </Col>
              <button 
                onClick={addToCartHandler}
                className={Styles.buttonFour}>
                ADICIONAR AO CARINHO
              </button>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  )
}

export default ProductInfo;