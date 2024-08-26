const footer= document.querySelector('#footer');
const divRedesSociales= document.createElement('div');
const ulRedesSociales= document.createElement('ul');
const divFecha= document.createElement('div');
const divUbicacion=document.createElement('div');
const parrafoFooter=document.createElement('p');
const fechaActual= new Date().getFullYear();
const ubicacion=document.createElement('a');
const imagenUbicacion=document.createElement('img');



const redesSociales= [
    {nombre: "instagram"},
    {nombre: "facebook"},
    {nombre: "youtube"}
];


for (const elemento of redesSociales) {
    const liRedesSociales = document.createElement('li');
    liRedesSociales.innerHTML=  `<a href="https://www.${elemento.nombre}.com"><img src="./assets/fondos/${elemento.nombre}.png"</a>`;
    ulRedesSociales.appendChild(liRedesSociales); 
    liRedesSociales.classList.add('redesSociales');
}

footer.appendChild(divRedesSociales);
footer.appendChild(divFecha);
footer.appendChild(divUbicacion);
divRedesSociales.appendChild(ulRedesSociales);
divFecha.appendChild(parrafoFooter);
parrafoFooter.innerHTML="Pataventura | " + fechaActual;
divUbicacion.appendChild(ubicacion);
ubicacion.appendChild(imagenUbicacion);
imagenUbicacion.src='./assets/fondos/ubicacion.png';

divFecha.classList.add("fecha");
divUbicacion.classList.add("ubicacion");
ulRedesSociales.classList.add("ulRedesSociales");
ubicacion.href='https://maps.app.goo.gl/NszXV9G3RHr5BcUw6';


