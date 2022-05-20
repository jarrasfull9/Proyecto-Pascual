/*con esto conseguimos que nos salga un mensaje cuando cargue la web 
window.onload = cargar;
var mensaje ="Hola";
function cargar(){
    alert (mensaje);
}*/
/*DOM es el modelo de objetos del documento*/
window.onload = cargar;
function cargar(){
    document.getElementById("ver").addEventListener("click", verVideo);
    /*Lo de ADD significa añadir lista de eventos a realizar*/
    document.getElementById("ocultar").addEventListener("click",cerrarVideo);
}
function verVideo(){
    document.getElementById("videoOculto").style.display = "block";
    document.getElementById("videoCalidad").src="https://www.youtube.com/embed/RroXP-vzXFg?;autoplay=1";
}
function cerrarVideo(){
    document.getElementById("videoOculto").style.display = "none";
    document.getElementById("videoCalidad").src="";
}