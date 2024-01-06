import React, {useEffect} from 'react';
import { Link, useParams, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Styles from '../components/Buttons.module.css'


function CartScreen({}){
  const { id } = useParams();
  const location = useLocation();
  let navigate = useNavigate();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  /* console.log(cartItems); */
  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty))
    }
  },[dispatch,id,qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const checkoutHandler = () =>{
    navigate('/login?redirect=shipping')
  }


  return (
    <main>
      <Row>
        <Col md={8}>
          <h3>Carrinho</h3>
          {cartItems.length === 0 ?(
            <Message variant='info'>
              Seu carrinho está vazio!
            </Message>
          ) : (
            <ListGroup>
              {cartItems.map(item => (
                <ListGroup.Item key={item.product}>
                  <Row className="align-items-center justify-content-center">
                    <Col md={2}>
                      <Image src={item.imagem} alt={item.nome} fluid rounder ></Image>
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.nome}</Link>
                    </Col>
                    <Col md={2}>
                      R${item.preco}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}>
                        {
                          [...Array(item.qntEstoque).keys()].map((x) => (
                            <option key={x+1} value={x+1}>
                              {x + 1}
                            </option>
                          ))
                        }
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={()=>removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup flush>
                <ListGroup.Item>
                  <h3>TOTAL de {cartItems.reduce((acc,item)=>acc+item.qty,0)} Itens</h3>
                  R$ {cartItems.reduce((acc,item)=>acc+item.qty*item.preco,0).toFixed(2)} 
                </ListGroup.Item><ListGroup.Item>
            <button 
                onClick={checkoutHandler}
                className={Styles.buttonThree}
                disabled={cartItems.length == 0}>
                COMPRAR
              </button>
            </ListGroup.Item>
            </ListGroup>  
          </Card>
        </Col>
      </Row>
    </main>
  )
}

export default CartScreen