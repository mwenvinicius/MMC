import React from "react";

if (window.location.pathname == '/home') {
    let count = 1;
    const slide = document.getElementById("radio1");
    if (slide) {
        slide.checked = true;
    }

    setInterval(function(){
        nextImage();}
    ,5000)
    
    function nextImage(){
        count++;
        if(count>5){
            count = 1;
        }
        document.getElementById("radio"+count).checked = true;
    }
}