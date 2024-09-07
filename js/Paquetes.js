

class CarritoDeCompras {
    constructor() {
        this.carrito = [];
    }

    añadirAlCarrito(paquete) {
        this.carrito.push(paquete);
        const nuevoPaquete = `${paquete.titulo} $${paquete.precio * 2}`;
        localStorage.setItem("DESTINO", nuevoPaquete);
    }

    eliminarDelCarrito(nombre) {
        this.carrito = this.carrito.filter(elemento => elemento.titulo !== nombre);
    }

    mostrarCarrito() {
        this.carrito.forEach(destino => console.log(destino));
    }

    calcularTotal(fn) {
        const precios = this.carrito.map(elemento => elemento.precio);
        return fn(precios);
    }

    finalizarCompra() {
        const precioFinal = this.calcularTotal(precios => precios.reduce((a, b) => a + b, 0));
        console.log(`El precio final es: $${precioFinal}`);
    }
}

const carro = new CarritoDeCompras();

const mainPaquetes = document.querySelector("#mainPaquetes");
const divCardsPaquetes = document.createElement('div');
mainPaquetes.appendChild(divCardsPaquetes);

const paquetes = [
    {
        titulo: "¡ Descubre El Calafate !",
        subtitulo: "Disfruta de una experiencia inolvidable con nuestro paquete turístico completo. Incluye:",
        incluye: "- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>- Excursión a Parque Nacional Los Glaciares: Admira el impresionante Glaciar Perito Moreno y otros paisajes glaciares de renombre mundial.<br>- Hospedaje de 3 Días y 2 Noches: Alojamiento en el cómodo Complejo Azul, ideal para descansar y disfrutar de la belleza local.",
        precio: 700000,
        promocion: "<span>6 cuotas sin interés</span>",
        claseBoton: "botonElCalafate",
        clase: "ElCalafate"
    },
    {
        titulo: "¡ Viaja Puerto Madryn!",
        subtitulo: "Disfruta de una experiencia inolvidable con nuestro paquete turístico completo. Incluye:",
        incluye: "- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>- Excursión a Península Valdés: Explora uno de los destinos más fascinantes de la Patagonia, famoso por su rica fauna marina.<br>- Hospedaje de 3 Días y 2 Noches: Alojamiento en el cómodo complejo La Quinta, ideal para descansar y disfrutar de la belleza local.",
        precio: 900000,
        promocion: "<span>6 cuotas sin interés</span>",
        claseBoton: "botonPuertoMadryn",
        clase: "PuertoMadryn"
    },
    {
        titulo: "¡ Descubre Bariloche !",
        subtitulo: "Disfruta de una experiencia inolvidable con nuestro paquete turístico completo. Incluye:",
        incluye: "Viaje Aéreo Ida y Vuelta: Viaja cómodamente sin preocuparte por el transporte.<br>Excursión al Lago Nahuel Huapi: Navega por este impresionante lago rodeado de montañas y bosques, para disfrutar en pareja.<br>Hospedaje de 3 Días y 2 Noches: Disfruta de una estancia relajante en la acogedora Estancia Tres.",
        precio: 800000,
        promocion: "<span>6 cuotas sin interés</span>",
        claseBoton: "botonBariloche",
        clase: "Bariloche"
    },
    {
        titulo: "¡ Descubre Ushuaia !",
        subtitulo: "Disfruta de una experiencia inolvidable con nuestro paquete turístico completo. Incluye:",
        incluye: "- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>- Excursión a Parque Nacional Tierra Del Fuego: Explora paisajes únicos de bosques, lagos y montañas en este impresionante parque.<br>- Hospedaje de 3 Días y 2 Noches: disfruta de una estancia acogedora en Posada Elefante.",
        precio: 700000,
        promocion: "<span>6 cuotas sin interés</span>",
        claseBoton: "botonUshuaia",
        clase: "Ushuaia"
    }
];

function generarCardsPaquetes(paquetes) {
    paquetes.forEach(destino => {
        const divPaquetes = document.createElement('div');
        divPaquetes.classList.add(destino.clase);
        divPaquetes.setAttribute("data-aos", "flip-down");
        divCardsPaquetes.appendChild(divPaquetes);

        divPaquetes.innerHTML = `
            <h1>${destino.titulo}</h1>
            <h2>${destino.subtitulo}</h2>
            <p>${destino.incluye}</p>
            <p class="precioPaquete">$${destino.precio}</p>
            <div class="cuotas">${destino.promocion}</div>
        `;

        const botonPaquete = document.createElement('button');
        botonPaquete.innerHTML = "COMPRAR PAQUETE";
        botonPaquete.classList.add(destino.claseBoton);
        divPaquetes.appendChild(botonPaquete);

        botonPaquete.addEventListener('click', () => {
            carro.añadirAlCarrito(destino);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Tu Paquete ya se agregó al Carrito!",
                showConfirmButton: false,
                timer: 3000
            });
        });
    });
}

generarCardsPaquetes(paquetes);



