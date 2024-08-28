


//cree PAQUETES TIRISTICOS

//         class Paquetes {
//             constructor(lugar,provincia,excursion,precio) {
//                 this.lugar=lugar.toUpperCase();
//                 this.provincia=provincia.toUpperCase();
//                 this.excursion=excursion.toUpperCase();
//                 this.precio=precio;
//             }
//             mostrarPaquete () {
//                 alert("¡Felicitaciones! Podes elegir este destino: "+this.lugar+","+this.provincia+"  Tenemos el mejor paquete para vos: Estadia con desayuno incluido + vuelo + Excursion a: "+this.excursion+ " por estadia de 3 dias y 2 noches con base doble a solo un precio de $"+this.precio+".- p/persona ");
//             }
//         }
        
//         const PuertoMadryn= new Paquetes ("Puerto Madryn","Chubut","Peninsula Valdés",900000);
//         const elCalafate= new Paquetes ("El Calafate","Santa Cruz","Parque Nacional Los Glaciares",700000);
//         const bariloche= new Paquetes ("Bariloche","Neuquén","Parque Nacional Nahuel Huapi",800000);
//         const ushuaia= new Paquetes ("Ushuaia","Tierra del Fuego","Parque Nacional Tierra del Fuego",700000);
        
//         const destinosPaquetes = [PuertoMadryn,elCalafate,bariloche,ushuaia];



// let paqueteElegido;


// // cree CARRITO DE COMPRAS


// class CarritoDeCompras {
//     constructor() {
//         this.carrito=[];
//     }
//     añadirAlCarrito (destino) {
//         this.carrito.push(destino);
//         // return console.log(this.carrito);
//     }
//     eliminarDelCarrito (nombre) {
//         this.carrito=this.carrito.filter((elemento)=> elemento.nombre !== nombre);
//         // return console.log (this.carrito);
//     }
//     mostrarCarrito() {
//         for(const destino of this.carrito) {
//             console.log(destino);
//         };
        
//     }
        
//         calcularTotal(fn) {
//             return fn(this.carrito.map((elemento) => elemento.precio));
//         }
    
//         finalizarCompra() {
            
//             const precioFinal = this.calcularTotal((precios) => precios.reduce((a, b) => a + b, 0));
//             console.log("El precio final es: $" + precioFinal);
//         }
// }


// const carrito= new CarritoDeCompras();


// // cree DESTINOS TURISTICOS



// class DestinoTuristico {
//     constructor(nombre,precio) {
//         this.nombre=nombre;
//         this.precio=precio;
//     }
//     mostrarDestino () {
//         alert("Tu destino puede ser: "+this.nombre+ " su pasaje ida y vuelta tiene un valor de $"+this.precio+ ".-");
//     }
// }
// const pM= new DestinoTuristico("Puerto Madryn",200000);
// const eC= new DestinoTuristico("El Calafate",185000);
// const bR= new DestinoTuristico("Bariloche",195000);
// const tDF= new DestinoTuristico("ushuaia",210000);

// const LUGAR= [pM,eC,bR,tDF];


// // cree HOSPEDAJE


// class Hospedaje {
//     constructor(nombre,precio) {
//         this.nombre=nombre;
//         this.precio=precio;
//     }
//     mostrarHospedaje () {
//         alert("En Resort "+ this.nombre+"  por tan solo $"+this.precio+ " por noche");
//     }
// }

// const laQuinta= new Hospedaje("La Quinta",100000);
// const kebrada= new Hospedaje("Kebrada",99000);
// const chichipa= new Hospedaje("Chichipa",50000);
// const azul= new Hospedaje("Azul",85000);
// const rojo= new Hospedaje("Rojo",120000);
// const verde= new Hospedaje("Verde",76000);
// const uno= new Hospedaje("Uno",105000);
// const dos= new Hospedaje("Dos",92000);
// const tres= new Hospedaje("Tres",89000);
// const lobo= new Hospedaje("Lobo",95000);
// const elefante= new Hospedaje("Elefante",115000);
// const cebra= new Hospedaje("Cebra",78000);

// const chubut=[laQuinta,kebrada,chichipa];
// const santaCruz=[azul,rojo,verde];
// const neuquen=[uno,dos,tres];
// const tierraDeFuego=[lobo,elefante,cebra];
// let lugar;
// let hospedaje;
// let hospedaje1;
// let hospedaje2;
// let hospedaje3;

// // cree EXCURSIONES


// class Excursiones {
//     constructor (nombre,precio) {
//         this.nombre=nombre.toUpperCase();
//         this.precio=precio;
//     }
//     mostrarExcursion () {
//         alert("Para que tu experiencia en este viaje sea realmente placentera, tenes que visitar  "+ this.nombre+"  por tan solo  $"+this.precio+ " por persona, en base doble");
//     }
// }

// const exChubut1= new Excursiones("Peninsula Valdés",70000);
// const exChubut2= new Excursiones("Museo Paleontológico de Trelew",60000);
// const exSantaCruz1= new Excursiones("Estancia Nibepo Aike, Paseo de Caballos y Cabalgata",75000);
// const exSantaCruz2= new Excursiones("Parque Nacional Los Glacieres",90000);
// const exNauquen1= new Excursiones("Parque Nacional Nahuel Huapi",60000);
// const exNauquen2= new Excursiones("Aventura Kanopy 4x4",60000);
// const exCTierraDelFuego1= new Excursiones("Parque Nacional Tierradel Fuego",110000);
// const exCTierraDelFuego2= new Excursiones("Senderismo a la Laguna Esmeralda",95000);

// const paseosChubut=[exChubut1,exChubut2];
// const paseosSantaCruz=[exSantaCruz1,exSantaCruz2];
// const paseosNeuquent=[exNauquen1,exNauquen2];
// const paseosTierraDelFuego=[exCTierraDelFuego1,exCTierraDelFuego2];
// let eligePaseo1;
// let eligePaseo2;
// let eligePaseo3;
// let eligePaseo4;

// /////////////////////////////////////////////APLICACION DE SELECCION//////////////////////

// alert("¡Bienvenido a su mejor opción de viajes por el Sur Argentino, sigue y encuentra los mejores paquetes!");

// let respuesta = parseFloat(prompt("Ud puede elegir entre nuestros paquetes o personalizar su viaje, ¿qué prefiere (coloque el número de la opción indicada)? \n 1: Paquetes \n 2: Personalizar mi viaje"));

// switch (respuesta) {
//     case 1:
//         alert("Aquí tenemos los mejores paquetes para usted: ");
//         for (const elemento of destinosPaquetes) {
//             elemento.mostrarPaquete();
//         }
//         paqueteElegido = parseFloat(prompt("Ingrese su destino dentro de las siguientes 4 opciones: \n  1: Puerto Madryn, Chubut; \n  2: El Calafate, Santa Cruz; \n  3: Bariloche, Neuquén; \n  4: Ushuaia, Tierra del Fuego "));
//         switch (paqueteElegido) {
//             case 1:
//                 carrito.añadirAlCarrito(PuertoMadryn);
//                 break;
//             case 2:
//                 carrito.añadirAlCarrito(elCalafate);
//                 break;
//             case 3:
//                 carrito.añadirAlCarrito(bariloche);
//                 break;
//             case 4:
//                 carrito.añadirAlCarrito(ushuaia);
//                 break;
//             default:
//                 alert("Ud no ingresó una opción correcta, vuelva a intentarlo y ¡acerquese más a su próximo destino!");
//         }
//         break;
//     case 2:
//         alert("Elige entre estos cuatro destinos: ");
//         for (const e of LUGAR) {
//             e.mostrarDestino();
//         }
//         lugar = parseFloat(prompt("Ingrese su destino dentro de las siguientes 4 opciones: \n  1: Puerto Madryn, Chubut; \n  2: El Calafate, Santa Cruz; \n  3: Bariloche, Neuquén; \n  4: Ushuaia, Tierra del Fuego "));
//         switch (lugar) {
//             case 1:
//                 carrito.añadirAlCarrito(pM);
//                 alert("Elige una estadía: ");
//                 for (const elemento of chubut) {
//                     elemento.mostrarHospedaje();
//                 }
//                 hospedaje = parseFloat(prompt("Ingrese su opción dentro de las siguientes opciones: \n  1: Resort La Quinta; \n  2: Resort Kebrada \n  3: Resort Chichipa"));
//                 switch (hospedaje) {
//                     case 1:
//                         carrito.añadirAlCarrito(laQuinta);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosChubut) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo1=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo1) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exChubut1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exChubut2);
//                                 break;
//                         }
//                         break;
//                     case 2:
//                         carrito.añadirAlCarrito(kebrada);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosChubut) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo1=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo1) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exChubut1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exChubut2);
//                                 break;
//                         }
//                         break;
//                     case 3:
//                         carrito.añadirAlCarrito(chichipa);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosChubut) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo1=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo1) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exChubut1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exChubut2);
//                                 break;
//                         }
//                         break;
//                     default:
//                         alert("Ud no ingresó una opción correcta, vuelva a intentarlo y ¡acerquese más a su próximo destino!");
//                 }
//                 break;
//             case 2:
//                 carrito.añadirAlCarrito(eC);
//                 alert("Elige una estadía: ");
//                 for (const elemento of santaCruz) {
//                     elemento.mostrarHospedaje();
//                 }
//                 hospedaje1 = parseFloat(prompt("Ingrese su opción dentro de las siguientes opciones: \n  1: Resort Azul; \n  2: Resort Rojo \n  3: Resort Verde"));
//                 switch (hospedaje1) {
//                     case 1:
//                         carrito.añadirAlCarrito(azul);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosSantaCruz) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo2=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo2) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exSantaCruz1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exSantaCruz2);
//                                 break;
//                         }
//                         break;
//                     case 2:
//                         carrito.añadirAlCarrito(rojo);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosSantaCruz) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo2=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo2) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exSantaCruz1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exSantaCruz2);
//                                 break;
//                         }
//                         break;
                        
//                     case 3:
//                         carrito.añadirAlCarrito(verde);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosSantaCruz) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo2=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo2) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exSantaCruz1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exSantaCruz2);
//                                 break;
//                         }
//                         break;
//                     default:
//                         alert("Ud no ingresó una opción correcta, vuelva a intentarlo y ¡acerquese más a su próximo destino!");
//                 }
//                 break;
//             case 3:
//                 carrito.añadirAlCarrito(bR);
//                 alert("Elige una estadía: ");
//                 for (const elemento of neuquen) {
//                     elemento.mostrarHospedaje();
//                 }
//                 hospedaje2 = parseFloat(prompt("Ingrese su opción dentro de las siguientes opciones: \n  1: Resort Uno; \n  2: Resort Dos \n  3: Resort Tres"));
//                 switch (hospedaje2) {
//                     case 1:
//                         carrito.añadirAlCarrito(uno);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosNeuquent) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo3=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo3) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exNauquen1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exNauquen2);
//                                 break;
//                         }
//                         break;
//                     case 2:
//                         carrito.añadirAlCarrito(dos);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosNeuquent) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo3=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo3) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exNauquen1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exNauquen2);
//                                 break;
//                         }
//                         break;
//                     case 3:
//                         carrito.añadirAlCarrito(tres);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosNeuquent) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo3=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo3) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exNauquen1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exNauquen2);
//                                 break;
//                         }
//                         break;
//                     default:
//                         alert("Ud no ingresó una opción correcta, vuelva a intentarlo y ¡acerquese más a su próximo destino!");
//                 }
//                 break;
//             case 4:
//                 carrito.añadirAlCarrito(tDF);
//                 alert("Elige una estadía: ");
//                 for (const elemento of tierraDeFuego) {
//                     elemento.mostrarHospedaje();
//                 }
//                 hospedaje3 = parseFloat(prompt("Ingrese su opción dentro de las siguientes opciones: \n  1: Resort Lobo; \n  2: Resort Elefante \n  3: Resort Cebra"));
//                 switch (hospedaje3) {
//                     case 1:
//                         carrito.añadirAlCarrito(lobo);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosTierraDelFuego) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo4=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo4) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego2);
//                                 break;
//                         }
//                         break;
//                     case 2:
//                         carrito.añadirAlCarrito(elefante);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosTierraDelFuego) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo4=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo4) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego2);
//                                 break;
//                         }
//                         break;
//                     case 3:
//                         carrito.añadirAlCarrito(cebra);
//                         alert("Elige una excursion ");
//                         for(const paseo of paseosTierraDelFuego) {
//                             paseo.mostrarExcursion();
//                         }
//                         eligePaseo4=parseFloat(prompt("Ingrese su opción dentro de las siguientes Excursiones: \n  1: Peninsula Valdés \n  2: Museo Paleontológico de Trelew  "));
//                         switch(eligePaseo4) {
//                             case 1:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego1);
//                                 break;
//                             case 2:
//                                 carrito.añadirAlCarrito(exCTierraDelFuego2);
//                                 break;
//                         }
//                         break;
//                     default:
//                         alert("Ud no ingresó una opción correcta, vuelva a intentarlo y ¡acerquese más a su próximo destino!");
//                 }
//                 break;
//             default:
//                 alert("Opción de destino no válida.");
//                 break;
//         }
//         break;
//     default:
//         alert("Opción no válida.");
//         break;
// }


// carrito.mostrarCarrito();
// carrito.calcularTotal((a,b)=>a+b);
// carrito.finalizarCompra();


