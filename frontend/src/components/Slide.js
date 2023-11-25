import React from 'react';
import styles from './Slide.module.css';
import './Slide.css';
import './SlidePass';

function Slide() {
  return (
    <div class="slider">
      {/* Slides da Aplicação. */}
        <div class="slides">
          {/* Botões de Rádio. */}
          <input type='radio' name='radioBtn' id='radio1'></input>
          <input type='radio' name='radioBtn' id='radio2'></input>
          <input type='radio' name='radioBtn' id='radio3'></input>
          <input type='radio' name='radioBtn' id='radio4'></input>
          <input type='radio' name='radioBtn' id='radio5'></input>

          <div class='slide first'>
              <img src='/Slides/Slide01.jpg'/>
          </div>

          <div class='slide'>
              <img src='/Slides/Slide02.jpg'/>
          </div>

          <div class='slide'>
              <img src='/Slides/Slide03.jpg'/>
          </div>

          <div class='slide'>
              <img src='/Slides/Slide04.jpg'/>
          </div>
          <div class='slide'>
              <img src='/Slides/Slide05.jpg'/>
          </div>

          <div class="navagationAuto">
            <div class="autoBtn1"></div>
            <div class="autoBtn2"></div>
            <div class="autoBtn3"></div>
            <div class="autoBtn4"></div>
            <div class="autoBtn5"></div>
          </div>
        </div>
        <div class="manualNavegation">
          <label for="radio1" class="manualBtn"></label>
          <label for="radio2" class="manualBtn"></label>
          <label for="radio3" class="manualBtn"></label>
          <label for="radio4" class="manualBtn"></label>
          <label for="radio5" class="manualBtn"></label>
        </div>
      <script src="./SlidePass.js" type="text/javascript" />
    </div>
  )
}

export default Slide;