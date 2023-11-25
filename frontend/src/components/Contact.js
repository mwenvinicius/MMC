import React from 'react';
import Styles from './Contact.module.css';
import StylesBNT from './Buttons.module.css';

function Contact() {
  return (
    <div className={Styles.contactContainer}>
        <h3 className={Styles.contactContainerTitle}>Entre em Contato</h3>
        <div> 
            <div className={Styles.background}>
                <div className={Styles.formBG}>
                    <h3 className={Styles.formBGTitle}>Mande sua Mensagem</h3>
                    <input type="text" placeholder='Nome Completo' className={Styles.formBGInput}></input>
                    <input type="email" placeholder='Email' className={Styles.formBGInput}></input>
                    <input type="text" placeholder='Mensagem' className={Styles.formBGInputText}></input>
                    <button className={[StylesBNT.buttonFour, Styles.Bnt].join(' ')}>Enviar</button>
                </div>
                <div className={Styles.division}>
                  <div className={Styles.line}></div>
                  <h1>OU</h1>
                  <div className={Styles.line}></div>
                </div>
                <div className={Styles.whatsAppPart}>
                  <h1 className={Styles.messagem}>Entre em contato com conosco pelo WhatsApp!</h1>
                  <div className={Styles.zapZap}>
                    <i class="fa-brands fa-whatsapp"></i>
                    <h2>+55 89 994174589</h2>
                  </div>
                </div>
            </div>    
        </div> 
    </div>
  )
}

export default Contact;