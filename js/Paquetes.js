class CarritoDeCompras {
    constructor() {
        this.carrito=[];
    }
    añadirAlCarrito (paquetes) {
        this.carrito.push(paquetes.titulo);
        this.carrito.push(paquetes.precio);
        let nuevoPaquete=this.carrito;
        
        localStorage.setItem("DESTINO",nuevoPaquete);   
    }
    eliminarDelCarrito (nombre) {
        this.carrito=this.carrito.filter((elemento)=> elemento.nombre !== nombre);
    
    }
    mostrarCarrito() {
        for(const destino of this.carrito) {
            console.log(destino);
        };
        
    }
        
        calcularTotal(fn) {
            return fn(this.carrito.map((elemento) => elemento.precio));
        }
    
        finalizarCompra() {
            
            const precioFinal = this.calcularTotal((precios) => precios.reduce((a, b) => a + b, 0));
            console.log("El precio final es: $" + precioFinal);
        }
}

const carro= new CarritoDeCompras();


const mainPaquetes= document.querySelector("#mainPaquetes");
const divCardsPaquetes=document.createElement('div');
mainPaquetes.appendChild(divCardsPaquetes);

const paquetes= [
    {titulo:"¡ Descubre El Calafate !",
    subtitulo:"Disfruta de una experiencia inolvidable  con nuestro paquete turístico completo. Incluye: ",
    incluye:"- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>    - Excursión a Parque Nacional Los Glaciares: Admira el impresionante Glaciar Perito Moreno y otros paisajes glaciares de renombre mundial.<br> - Hospedaje de 3 Días y 2 Noches: Alojamiento en el cómodo Complejo Azul, ideal para descansar y disfrutar de la belleza local.",
    precio:700000,
    promocion:"<span> 6 <span> cuotas sin interes",
    claseBoton:"botonElCalafate",
    clase:"ElCalafate"
},
{titulo:"¡ Viaja Puerto Madryn!",
    subtitulo:"Disfruta de una experiencia inolvidable  con nuestro paquete turístico completo. Incluye: ",
    incluye:"- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>- Excursión a Península Valdés: Explora uno de los destinos más fascinantes de la Patagonia, famoso por su rica fauna marina.<br>- Hospedaje de 3 Días y 2 Noches: Alojamiento en el cómodo complejo La Quinta, ideal para descansar y disfrutar de la belleza local.",
    precio:900000,
    promocion:"<span> 6 <span> cuotas sin interes",
    claseBoton:"botonPuertoMadryn",
    clase:"PuertoMadryn"
},
{titulo:"¡ Descubre Bariloche !",
    subtitulo:"Disfruta de una experiencia inolvidable  con nuestro paquete turístico completo. Incluye: ",
    incluye:"Viaje Aéreo Ida y Vuelta: Viaja cómodamente sin preocuparte por el transporte.<br>Excursión al Lago Nahuel Huapi: Navega por este impresionante lago rodeado de montañas y bosques, para disfrutar en pareja.<br>Hospedaje de 3 Días y 2 Noches: Disfruta de una estancia relajante en la acogedora Estancia Tres.",
    precio:800000,
    promocion:"<span> 6 <span> cuotas sin interes",
    claseBoton:"botonBariloche",
    clase:"Bariloche"
    },
    {titulo:"¡ Descubre Ushuaia !",
    subtitulo:"Disfruta de una experiencia inolvidable  con nuestro paquete turístico completo. Incluye: ",
    incluye:"- Viaje Aéreo Ida y Vuelta: Relájate y comienza tu aventura sin preocuparte por los detalles del transporte.<br>- Excursión a Parque Nacional Tierra Del Fuego: Explora paisajes únicos de bosques, lagos y montañas en este impresionante parque.<br>- Hospedaje de 3 Días y 2 Noches: disfruta de una estancia acogedora en Posada Elefante",
    precio:700000,
    promocion:"<span> 6 <span> cuotas sin interes",
    claseBoton:"botonUshuaia",
    clase:"Ushuaia",
    }
]
let botonBuscar;
let divPaquetes;
let spanBoton;
function cardsPaquetes (paquetes) {
    for(let destino of paquetes) {
        let divPaquetes= document.createElement('div');
        divCardsPaquetes.appendChild(divPaquetes);
        divPaquetes.setAttribute("data-aos","flip-down");
divPaquetes.classList.add(destino.clase);

        let h1Paquetes=document.createElement('h1');
        h1Paquetes.innerHTML=destino.titulo;
        divPaquetes.appendChild(h1Paquetes);

        let h2Paquetes= document.createElement('h2');
        h2Paquetes.innerHTML= destino.subtitulo;
        divPaquetes.appendChild(h2Paquetes);

        let parrafoPaquetes= document.createElement('p');
        parrafoPaquetes.innerHTML=destino.incluye;
        divPaquetes.appendChild(parrafoPaquetes);


        let precioPaquete=document.createElement('p');
        precioPaquete.classList.add('precioPaquete');
        precioPaquete.innerHTML= "$"+destino.precio ;
        divPaquetes.appendChild(precioPaquete);

        let divCuotas=document.createElement('div');
        divCuotas.classList.add('cuotas');
        divCuotas.innerHTML=destino.promocion;
        divPaquetes.appendChild(divCuotas);

        let botonPaquete=document.createElement('button');
        botonPaquete.innerHTML="COMPRAR PAQUETE";
        divPaquetes.appendChild(botonPaquete);
        botonPaquete.classList.add(destino.claseBoton);


        botonPaquete.addEventListener('click', () => {
            carro.añadirAlCarrito(destino);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "¡Tu Paquete ya se agrego al Carrito!",
                showConfirmButton: false,
                duration: 3000,
            });
        });
    }
}
cardsPaquetes(paquetes);

const botonElCalafate= document.querySelector('.botonElCalafate');
const botonPuertoMadryn= document.querySelector('.botonPuertoMadryn');
const botonBariloche= document.querySelector('.botonBariloche');
const botonUshuaia= document.querySelector('.botonUshuaia');





