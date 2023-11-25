import React from 'react';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
        <div className={Styles.container}>
            <div className={Styles.row}>
                <div className={Styles.footerCol}>
                    <h4>mm construções</h4>
                    <ul>
                        <li><a href='#'>Categorias</a></li>
                        <li><a href='#'>Buscar Produtos</a></li>
                        <li><a href='#'>Promoções</a></li>
                    </ul>
                </div>
                <div className={Styles.footerCol}>
                    <h4>informações</h4>
                    <ul>
                        <li><a href='#'>Sobre a Loja</a></li>
                        <li><a href='#'>Entre em Contato</a></li>
                        <li><a href='#'>Localização</a></li>
                    </ul>
                </div>
                <div className={Styles.footerCol}>
                    <h4>top categorias</h4>
                    <ul>
                        <li><a href='#'>Materiais de Construções</a></li>
                        <li><a href='#'>Ferramentas</a></li>
                        <li><a href='#'>Pintura e Acabamento</a></li>
                    </ul>
                </div>
                <div className={Styles.footerCol}>
                    <h4>redes sociais</h4>
                    <ul>
                        <li>
                            <a href='#'>
                                <div className={Styles.redes}>
                                    <i class="fa-brands fa-instagram"></i>
                                    <h6>Instagram</h6>
                                </div>
                                
                            </a>
                        </li>
                        <li >
                            <a href='#'>
                                <div className={Styles.redes}>
                                    <i class="fa-brands fa-facebook"></i>
                                    <h6>Facebook</h6> 
                                </div>
                                
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <div className={Styles.redes}>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <h6>WhatsApp</h6>
                                </div>
                               
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;