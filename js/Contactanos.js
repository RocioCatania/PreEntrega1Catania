
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
        { nombre: "../assets/fondos/instagram.png", text: "Calle Ninguna 2424, CABA, ARG" },
        { nombre: "./assets/fondo/instagram.png", text: "@Pataventura_turismo" },
        { nombre: "./assets/fondo/youtube.png", text: "Pataventura por el Sur Argentino" },
        { nombre: "./assets/fondo/facebook.png", text: "Pataventura Turismo" }
    ];

    redes.forEach(({ nombre, text }) => {
        const li = document.createElement('li');
        li.innerHTML = `<a><img src="${nombre}" alt="icono"> ${text}</a>`;
        ulRedes.append(li);
    });
}
