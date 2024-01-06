import React from 'react';
import styles from './NavBar.module.css';
import './NavBar.css';
import NavBarSec from './NavBarSec';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={styles.centMain}>
        <header className={styles.navbar}>
            <div className={styles.firstContent}>
                <div className={styles.part}>
                    <i class="fa-brands fa-whatsapp iconOne"></i>
                    <span>+55 89 994174589</span>
                </div>
                <div className={styles.part}>
                    <i class="fa-regular fa-envelope iconOne"></i>
                    <span>mmcontrucoes@gmail.com</span>
                </div>
            </div>
            <div>
                <Link to='/home'>
                    <h1 className={styles.titleNavBar}>MM CONSTRUÇÕES</h1>
                </Link>
                
            </div>
            <div className={styles.thirdPart}>
                <div className={styles.mainIcons}>
                    <div>
                        <i class="fa-regular fa-heart iconTwo"></i>
                    </div>
                    <div>
                        <i class="fa-solid fa-cart-shopping iconThree"></i>
                    </div>
                </div>
                <div>
                    <div className={styles.lineDiv}></div>
                </div>
                <div className={styles.buttonsContent}>
                    <button class='buttonOne'>Cadastrar-se</button>
                    <button className={styles.buttonTwo}>Entrar</button>
                </div>
            </div>
           
        </header>
        <NavBarSec/>
    </div>
  )
}

export default NavBar;