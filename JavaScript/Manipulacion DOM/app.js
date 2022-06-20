// 1. Inserta 4 items más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor.

const $container = document.querySelector(".container")

for (let i = 3; i < 7; i++) {    
    let div = document.createElement("div")
    div.classList.add("item")
    div.textContent = i;
    
    $container.appendChild(div)
}

// 2. Agrégales a todos los items la clase error

let $items = document.querySelectorAll('.item')   
    //$items.forEach(item => item.classList.add('error'))
    for (let i = 0; i < $items.length; i++) {
        $items[i].classList.add('error');
    }   

   
// 3. Agrégale el texto "2" al círculo

let $circle = document.querySelector('.circle');
$circle.textContent = 2;

// 4. Elimina el párrafo

let $parrafo = document.querySelector('p')
$parrafo.parentNode.removeChild($parrafo);