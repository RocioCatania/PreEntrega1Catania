const mainContactanos= document.querySelector('#mainContactanos');
const seccionContactanos= document.createElement('section');
const h1Contactanos=document.createElement('h1');
const articuloForm= document.createElement('form');
const inputNombre=document.createElement('input');
const inputTelefono=document.createElement('input');
const inputMail=document.createElement('input');
const botonContactanos=document.createElement('button');
const articuloMap=document.createElement('article');
const articuloRedes=document.createElement('article');

seccionContactanos.classList.add('seccionContactanos');
articuloForm.classList.add('articuloForm');
articuloMap.classList.add('articuloMap');
articuloRedes.classList.add('articuloRedes');

h1Contactanos.innerHTML="¡CONTACTANOS!";
mainContactanos.appendChild(seccionContactanos);
seccionContactanos.append(articuloForm, articuloMap, articuloRedes);
articuloForm.append(h1Contactanos, inputNombre,inputTelefono, inputMail, botonContactanos);
