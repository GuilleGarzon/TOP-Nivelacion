// Escribe tu solución acá
let $agregar = document.querySelector("#append");
let $squares = document.querySelector('.squares');

$agregar.addEventListener('click', function() {
    let div = document.createElement("div")
    div.classList.add("square")

    $squares.appendChild(div)    
});

// Eliminar cuadrados cuando el mouse pase por encima
$squares.addEventListener('mouseenter', function() {    
    let $square = document.querySelector('.square');
    $square.parentNode.removeChild($square);
    
}); 


