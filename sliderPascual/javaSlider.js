window.onload = inicio;
function inicio(){
    iniciarSlider();
}
function iniciarSlider(){
    //Realización de variables globales.
    window.slider = document.querySelector("#slider");
    window.sliderSeccion = document.querySelectorAll(".slider__seccion");
    window.sliderSeccionUltimo = sliderSeccion[sliderSeccion.lenght - 1];
    //Realización de las escuchas del programas
    document.querySelector("#btn-izquierdo").addEventListener("click", izquierda);
    document.querySelector("#btn-derecho").addEventListener("click", derecha);
}
function izquierda(){
    let ultimoElemento = document.querySelectorAll(".slider__seccion")[sliderSeccion.lenght - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s";
    //Iniciamos una function sin nombrarla.
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterBegin", ultimoElemento);
        slider.style.marginLeft = "-100%";
    }, 1000);
}
function derecha(){
    let primerElemento = document.querySelectorAll(".slider__seccion")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeEnd", primerElemento);
        slider.style.marginLeft = "-100%";
    }, 1000);
}
//Modo automático del paso de las fotos.
setInterval(derecha, 5000);