import React from 'react';
import Styles from './Brands.module.css';

function Brands() {
  return (
    <div className={Styles.containerGridBrands}>
        <h3>Navegue por Marcas</h3>
        <div className={Styles.gridBrand}>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Black-Decker.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Bosch.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Chemicolor.jpg'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Elizabeth.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Irwin.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Skill.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Suvinil.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Tigre.jpg'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Tramontina.png'></img>
            </div>
            <div className={Styles.brandContainer}>
                <img src='/Marcas/Viqua.png'></img>
            </div>
        </div>
    </div>
  )
}

export default Brands;