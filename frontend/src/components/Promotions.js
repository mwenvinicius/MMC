import React from 'react';
import Styles from './Promotions.module.css';
import StylesBNT from './Buttons.module.css';

function Promotions() {
  return (
    <div className={Styles.Promotions}>
        <div className={Styles.promoPart1}>
            <span>Promoções</span>
            <h1>Fique por dentro das promoções!</h1>
            <p>Cadastre seu email e receba novidades todos os dias!</p>
        </div>
        <div className={Styles.promoPart2}>
            <input placeholder='Digite seu Email'type='text'></input>
            <button className={StylesBNT.buttonFour}>Enviar</button>
        </div>
    </div>
  )
}

export default Promotions