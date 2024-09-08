
const mainContactanos = document.querySelector('#mainContactanos');
const seccionContactanos = document.createElement('section');
const h1Contactanos = document.createElement('h1');
const articuloForm = document.createElement('form');
const inputNombre = document.createElement('input');
const inputTelefono = document.createElement('input');
const inputMail = document.createElement('input');
const botonContactanos = document.createElement('button');
const articuloMap = document.createElement('article');
const articuloRedes = document.createElement('article');

asignarAtributosYClases(seccionContactanos, 'seccionContactanos', null, { "data-aos": "zoom-in-up" });
asignarAtributosYClases(articuloForm, 'articuloForm');
asignarAtributosYClases(articuloMap, 'articuloMap', null, { "data-aos": "fade-up" });
asignarAtributosYClases(articuloRedes, 'articuloRedes');
asignarAtributosYClases(h1Contactanos, null, "¡CONTACTANOS!");
asignarAtributosYClases(botonContactanos, 'botonContactanos', "ENVIAR", { "type": "submit" });

mainContactanos.appendChild(seccionContactanos);
seccionContactanos.append(articuloForm, articuloMap, articuloRedes);
articuloForm.append(h1Contactanos, inputNombre, inputTelefono, inputMail, botonContactanos);

asignarAtributosInput(inputNombre, "Nombre y Apellido", "text", "input", "inputNombre");
asignarAtributosInput(inputTelefono, "Teléfono", "tel", "input", "inputTelefono");
asignarAtributosInput(inputMail, "Email", "email", "input", "inputMail");

articuloForm.addEventListener("submit", validarInfo);

function validarInfo(e) {
    e.preventDefault(); 
    
    const nombreStorage = inputNombre.value;
    const telefonoStorage = inputTelefono.value;
    const mailStorage = inputMail.value;

    localStorage.setItem("Nombre", nombreStorage);
    localStorage.setItem("Telefono", telefonoStorage);
    localStorage.setItem("Mail", mailStorage);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Su solicitud de contacto se ha enviado",
        showConfirmButton: false,
        timer: 2000
    });

    setTimeout(() => location.reload(), 1500);
}

const map = document.querySelector('#map');
articuloMap.appendChild(map);

const ulRedes = document.createElement('ul');
crearRedesSociales(ulRedes);
articuloRedes.appendChild(ulRedes);

function asignarAtributosYClases(elemento, clase = null, texto = null, atributos = {}) {

    if (clase) elemento.classList.add(clase);
    if (texto) elemento.innerHTML = texto;
    for (const [key, value] of Object.entries(atributos)) {
        elemento.setAttribute(key, value);
    }
}

function asignarAtributosInput(input, placeholder, tipo, clase, id) {
    asignarAtributosYClases(input, clase, null, { placeholder, type: tipo, id });
}

function crearRedesSociales(ulRedes) {
    const redes = [
        { nombre: "../assets/fondos/ubicacion.png", text: "Calle Ninguna 2424, CABA, ARG" ,clase:"datos",url: "https://maps.app.goo.gl/ooq7KP788FPnziTX8"},
        { nombre: "../assets/fondos/instagram.png", text: "@Pataventura_turismo",clase:"datos",url:"https://www.youtube.com/" },
        { nombre: "../assets/fondos/youtube.png", text: "Pataventura por el Sur Argentino" , clase:"datos",url:"https://www.youtube.com"},
        { nombre: "../assets/fondos/facebook.png", text: "Pataventura Turismo", clase:"datos",url:"https://www.facebook.com"}
    ];

    redes.forEach(({ nombre, text, clase, url }) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href= "${url}"><img  src="${nombre}" alt="icono"> ${text}</a>`;
        li.classList.add (clase);
        ulRedes.append(li);
    });
}
