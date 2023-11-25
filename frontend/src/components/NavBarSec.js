import React from 'react';
import styles from './NavBarSec.module.css';
import './NavBarSec.css';
import stylesTwo from './NavBar.module.css';

function NavBarSec() {
  return (
    <div className={styles.sec}>
        <div className={styles.partOne}>
            <div className={styles.part}>
                <i class="fa-solid fa-bars iconOnly"></i>
                <span className={styles.textOps}>CATEGORIAS</span>
            </div>
            <div className={styles.part}>
                <i class="fa-solid fa-magnifying-glass iconOnly"></i>
                <span className={styles.textOps}>BUSCAR PRODUTOS</span>
            </div>
        </div>
        <div className={styles.partTwo}>
            <span className={styles.textOps}>PROMOÇÕES</span>
            <span className={styles.textOps}>ENTRAR EM CONTATO</span>
            <span className={styles.textOps}>SOBRE A LOJA</span>
        </div>
        <div className={styles.partThree}>
            <i class="fa-regular fa-map"></i>
            <p className={styles.textLocal}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
        </div>
    </div>
  )
}

export default NavBarSec;