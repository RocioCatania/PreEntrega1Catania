
const mainViajes = document.querySelector('#mainViajes');
const sectionViajes = document.querySelector('#sectionViajes');
const divViajes = document.createElement('div');
const h1Viajes = document.createElement('h1');
const h2Viaje = document.createElement('h2');
const formViajes = document.createElement('form');
const parrafoViajes = document.createElement('p');
const botonBuscar = document.createElement('button');

formViajes.classList.add('formViajes');
botonBuscar.classList.add("botonBuscar");
botonBuscar.textContent = "BUSCAR";
parrafoViajes.innerHTML = "* Si desea acceder a tarifas para personas de la tercera edad, debe apersonarse por nuestras oficinas con documentación respaldatoria.";
h1Viajes.textContent = "PLANIFICA TU";
h2Viaje.textContent = "VIAJE";

sectionViajes.appendChild(divViajes);
divViajes.append(h1Viajes, h2Viaje, formViajes, parrafoViajes);
divViajes.setAttribute("data-aos", "zoom-in");
formViajes.appendChild(botonBuscar);

const formulario = {
    elements: [
        { id: "desde", element: "select", name: "DESDE:", options: [" ", "Buenos Aires", "Cordoba"], placeholder: "DESDE:" },
        { id: "a", element: "select", name: "A: ", options: [" ", "Puerto Madryn", "El Calafate", "Bariloche", "Ushuaia"], placeholder: "A:" },
        { id: "fechasalida", element: "input", type: "date", name: "fecha", placeholder: "SALIDA:" },
        { id: "fechaRegreso", element: "input", type: "date", name: "fecha", placeholder: "REGRESO:" },
        { id: "idaYVuelta", element: "input", type: "radio", name: "IdayVuelta", placeholder: "Ida y Vuelta" },
        { id: "SoloIda", element: "input", type: "radio", name: "SoloIda", placeholder: "Solo Ida" },
        { id: "persona", element: "select", options: [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], name: "numberpersona", placeholder: "PERSONAS:" }
    ]
};

function createElement(element) {
    const el = document.createElement(element.element);
    el.id = element.id;
    el.name = element.name;
    if (element.type) el.type = element.type;
    if (element.options) {
        element.options.forEach(option => {
            const o = document.createElement('option');
            o.value = option;
            o.textContent = option;
            el.appendChild(o);
        });
    }
    return el;
}

function createLabelForElement(element) {
    const label = document.createElement('label');
    label.textContent = element.placeholder;
    label.setAttribute('for', element.id);
    return label;
}

formulario.elements.forEach(elem => {
    const el = createElement(elem);
    const label = createLabelForElement(elem);
    formViajes.appendChild(label);
    formViajes.appendChild(el);
});

const radio1 = document.querySelector('#idaYVuelta');
const radio2 = document.querySelector('#SoloIda');
radio1.checked = true;
radio2.checked = true;

radio1.addEventListener('change', () => radio1.checked && (radio2.checked = false));
radio2.addEventListener('change', () => radio2.checked && (radio1.checked = false));

function validarFormulario(e) {
    const form = e.target;
    return {
        desde: form.querySelector('#desde').value,
        hasta: form.querySelector('#a').value,
        salida: form.querySelector('#fechasalida').value,
        llegada: form.querySelector('#fechaRegreso').value,
        personas: parseInt(form.querySelector('#persona').value)
    };
}

function calcularPrecioConIncremento(fechaSalida, fechaRegreso, cantidadPersonas) {
    const fechaSalidaDate = new Date(fechaSalida);
    const fechaRegresoDate = new Date(fechaRegreso);
    const precioBase = 500000;
    
    const diferenciaEnMilisegundos = fechaRegresoDate - fechaSalidaDate;
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
    
    let precioFinal = precioBase * Math.pow(1.02, diferenciaEnDias);
    
    return parseInt(precioFinal * cantidadPersonas);
}

formViajes.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const datosFormulario = validarFormulario(e);
    const precioFinal = calcularPrecioConIncremento(datosFormulario.salida, datosFormulario.llegada, datosFormulario.personas);
    
    datosFormulario.precioFinal = precioFinal;
    localStorage.setItem("Paquete Elegido", JSON.stringify(datosFormulario));
    
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Tu Paquete ya se agregó al Carrito!",
        showConfirmButton: false,
        timer: 3000
    });
});


///API DE TIEMPO ////////////////////////////////////


const resultado= document.querySelector('.resultado');
const formtiempo= document.querySelector('.tiempo');
const destinosSur= document.querySelector('#sur');
const argentina=document.querySelector('#pais');

formtiempo.addEventListener('submit',(e)=> {
    e.preventDefault();
    if(destinosSur.value===""||argentina.value===""){
        error("Las opciones son incorrectas");
        return;
    }

    callAPI(destinosSur.value,argentina.value);

 })
function error(mensaje){
   
    const alerta=document.createElement('p');
    alerta.classList.add('alertaMensaje');
    alerta.innerHTML=mensaje;

    formtiempo.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

 function callAPI(destinosSur,argentina) {
    const apiID="7f795abfcd83407347e8f8252b748fe7";
    const url=   `https://api.openweathermap.org/data/2.5/weather?q=${destinosSur},,${argentina}&appid=${apiID}`;
    fetch(url)
        .then (data=> {
            return data.json();
    })
    .then (dataJSON=> {
            limpiarHTML();
            icono(dataJSON);
    })
    .catch( error=>{
        console.log(error)
        ;})
    }
    
    function centigrados (temp) {
        return parseInt(temp-273.15);
    }
    
    function icono (data) {
        const {name,main:{temp,temp_min,temp_max},weather:[arr]}= data;
    
        const grados= centigrados(temp);
        const gradosmax= centigrados(temp_max);
        const gradosmin= centigrados(temp_min);
        
        const contenedor=document.createElement('div');
        contenedor.innerHTML=`
        <h2>Sur Argentino</h2>
        <p>Clima en ${name}</p>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
        <h2>${grados}°C</h2>
        <p>max:${gradosmax}°C</p>
        <p>min:${gradosmin}°C</p>`
        ;
        resultado.appendChild(contenedor);

    }
    function limpiarHTML () {
        resultado.innerHTML="";
    }
    callAPI(destinosSur.value);