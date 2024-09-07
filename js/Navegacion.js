const header = document.querySelector('#header');
const divNavegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const img = document.createElement('img');
const avionCarrito = document.createElement('img');
const logo = document.createElement('a');
const carrito = document.createElement('a');
const contactanos= document.createElement('a');

const enlace = [
    {
        link:"VIAJES",
        nombre:"PLANIFICA TU VIAJE"
    },
    {
        link:"DESTINOS",
        nombre:"DESTINOS"
    },
    {
        link:"PAQUETES",
        nombre:"PAQUETES"
    },
];


header.appendChild(divNavegacion);
divNavegacion.appendChild(logo);
divNavegacion.appendChild(nav);
divNavegacion.appendChild(carrito);
nav.appendChild(ul);
carrito.href='carrito.html';
carrito.appendChild(avionCarrito);
img.src= './assets/fondos/1.png'
logo.appendChild(img);
logo.href= 'index.html';
avionCarrito.src='./assets/fondos/takeoff-the-plane.png';
avionCarrito.href='carrito.html';
contactanos.href='contactanos.html';
divNavegacion.appendChild(contactanos);
contactanos.innerHTML='CONTACTANOS';


for (const link of enlace) {
    const li = document.createElement('li');
    li.innerHTML=  `<a href=" ${link.link}.html "> ${link.nombre} </a>`;
    ul.appendChild(li); 
}

divNavegacion.classList.add("navBar");
img.classList.add("logo");
avionCarrito.classList.add("avionCarrito");
carrito.classList.add("carrito");
logo.classList.add("logo1");
contactanos.classList.add("contactanos");

