const mainViajes= document.querySelector('#mainViajes');
const sectionViajes= document.querySelector('#sectionViajes');
const divViajes= document.createElement('div');
const h1Viajes= document.createElement('h1');
const h2Viaje=document.createElement('h2');
const formViajes=document.createElement('form');
const parrafoViajes=document.createElement('p');
const botonBuscar= document.createElement('button');

formViajes.classList.add('formViajes');
mainViajes.appendChild(sectionViajes);
sectionViajes.appendChild(divViajes);
divViajes.append(h1Viajes, h2Viaje, formViajes, parrafoViajes);
formViajes.appendChild(botonBuscar);
botonBuscar.classList.add("botonBuscar");
botonBuscar.innerHTML="BUSCAR";

parrafoViajes.innerHTML="* Si desea acceder a tarifas para personas de la tercera edad. Debe apersonarse por nuestras oficinas con documentación respaldatoria.";
h1Viajes.innerHTML="PLANIFICA TU";
h2Viaje.innerHTML="VIAJE";

const formulario = {

    elements: [
        {
            id:"desde",
            element: "select",
            name: "DESDE:",
            options: [" ","Buenos Aires","Cordoba"],
            placeholder:"DESDE:", 
        
        },
        {
            id:"a",
            element: "select",
            name: "A: ",
            options: [" ","Puerto Madryn","El Calafate","Bariloche","Ushuaia"],
            placeholder:"A:",
            
        },
        {
            id:"fechasalida",
            element: "input",
            type: "date",
            name: "fecha",
            placeholder:"SALIDA:",
        },
        {
            id:"fechaRegreso",
            element: "input",
            type: "date",
            name: "fecha",
            placeholder:"REGRESO:",
    
            
        },
        {
            id:"idaYVuelta",
            element: "input",
            type: "radio",
            name: "IdayVuelta",
            placeholder:"Ida y Vuelta"
            
        },
        {
            id:"SoloIda",
            element: "input",
            type: "radio",
            name: "SoloIda",
            placeholder:"Solo Ida"
            
        },
        {
            id:"persona",
            element: "select",
            options: [" ",1,2,3,4,5,6,7,8,9,10],
            name: "numberpersona",
            placeholder:"PERSONAS:"
        }
    ]
}

let el;
function createElement(element) {
    // console.log(element)
    let el = document.createElement(element.element);
    if (el.type) {
        el.type = element.type
    }
        el.id= element.id
    el.name = element.name
    if (element.options) {
        for(option in element.options) {
            let o = document.createElement('option')
            o.value = element.options[option]
            o.innerHTML = element.options[option]
            el.appendChild(o)
        }
    }
    return el;
}

for (element in formulario.elements) {

    let el = createElement(formulario.elements[element])
    let label= createLabelForElement(formulario.elements[element])
    document.querySelector(".formViajes").appendChild(el)
    document.querySelector(".formViajes").appendChild(label)
}

function createLabelForElement (element) {
    let label= document.createElement('label')
    label.innerHTML=element.placeholder
    label.for= element.id
    return label
}

const radio1 = document.querySelector('#idaYVuelta');
const radio2 = document.querySelector('#SoloIda');
radio1.addEventListener('change', () => radio1.checked ? (radio2.checked = false) : null);
radio2.addEventListener('change', () => radio2.checked ? (radio1.checked = false) : null);


document.getElementsByClassName("botonBuscar");



formViajes.addEventListener("submit", validarFormulario)


function validarFormulario (e) {
e.preventDefault();
// console.log("formulario enviado");
let form = e.target;
const desdeStorag=form.children[1].value;
const hastaStorag=form.children[3].value;
const salidaStorage=form.children[5].value;
const llegadaStorag=form.children[7].value;
const idaYVueltaStorag=form.children[9].value;
const idaStorag=form.children[11].value;
const personasStorage=form.children[13].value;

localStorage.setItem("Desde:",desdeStorag);
localStorage.setItem("Hasta:",hastaStorag);
localStorage.setItem("Salida:",salidaStorage);
localStorage.setItem("Llegada:",llegadaStorag);
localStorage.setItem("ida y vuelta",idaYVueltaStorag);
localStorage.setItem("ida",idaStorag);
localStorage.setItem("Cantidad de Personas",personasStorage);

}

for (let i=0;i< localStorage.length;i++){
    let clave= localStorage.key(i);
    console.log(" valor: " + localStorage.getItem(clave));
    console.log(clave); 
}


