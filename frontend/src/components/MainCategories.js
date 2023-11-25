import React from 'react';
import Styles from './MainCategories.module.css';

function MainCategories() {
  return (
    <div>
        <h1 className={Styles.SectionTitle}>Categorias Populares</h1>
        <div className={Styles.Background}>
            <div className={Styles.cardTopCategory}>
                <div className={Styles.Imagem}>
                    <img src='/Icons/Tijolos.png'></img>
                </div>
                <h3>Materiais de Construção</h3>
            </div>
            <div className={Styles.cardTopCategory}>
                <div className={Styles.Imagem}>
                    <img src='/Icons/Ferramenta.png'></img>
                </div>
                <h3>Ferramentas</h3>
            </div>
            <div className={Styles.cardTopCategory}>
                <div className={Styles.Imagem}>
                    <img src='/Icons/Luz.png'></img>
                </div>
                <h3>Elétrica e Iluminação</h3>
            </div>
            <div className={Styles.cardTopCategory}>
                <div className={Styles.Imagem}>
                    <img src='/Icons/RoloDePintura.png'></img>
                </div>
                <h3>Pintura e Acabamento</h3>
            </div>
        </div>
    </div>
  )
}

export default MainCategories