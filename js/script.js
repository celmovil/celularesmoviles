// seleccionar elementos co queryselectorL
// retorna de 0 a 1 elemnto
const titulo=document.querySelector(".title");
console.log(titulo)
// seleccionar elementos co queryselectorALL
// retorna los valores en un array de 0 a 1 elemento
const enlace=document.querySelectorAll('#menu a');
console.log(enlace)
//getElementById
const seccion=document.getElementById("seccion");
console.log(seccion)
//generar codigo html desde javascript
const nuevoenlace=document.createElement('a');
//<a href "ayuda.html">texto</a>
//agregar el href
nuevoenlace.href="ayuda.html"
//agregar el texto
nuevoenlace.textContent="Ayuda"
//agregaruna clase
nuevoenlace.classList.add('enlace')
//agreagar al documento
const navegacion=document.querySelector('#menu')
navegacion.appendChild(nuevoenlace)
//appendChild agrega aun modo al final de la lista de un 
//elemento padre especificado
//EVENTOS
window.addEventListener('load',console.log(1))
window.onload=function()
{
    console.log(3)
}
window.addEventListener('load',imprimir)
function imprimir()
{
    console.log(2)
}
//seleccionar elementos y asignar eventos
const btnenviar=document.querySelector('#enviar');
document.addEventListener
btnenviar.addEventListener('click',function(evento){
    console.log(evento)
    evento.preventDefault();
    //se previene esa accion de flash por default
    //es decir , ya nose va a recargar el formulario
    //este etodo se utiliza en formularios
    console.log("enviando formulario")

})