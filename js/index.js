// Buscador de destino turistico Sur de Argentina (El Calafate, Santa Cruz; Bariloche,Neuquen; Puerto Madryn , Chubut; Ushuaia, Tierra del Fuego ) 

alert("¡Bienvenido a su mejor opcion de viajes por el Sur Argentino, segui y encontra los mejores paquetes!");



let destino= parseFloat(prompt("Ingrese su destino dentro de las siguientes 4 opciones: opcion 1:Puerto Madryn , Chubut; opcion 2:El Calafate, Santa Cruz, opcion 3:Bariloche,Neuquen , opcion 4:Ushuaia, Tierra del Fuego "));
    switch (destino) {
        case 1:
            alert("¡Felicitaciones! Elegiste tu destino: 'Puero Madryn, Chubut' Tenemos el mejor paquete para vos: Estadia con desayuno incluido + vuelo + Excursion a Peninsula Valdés (estadia por 3 dias y 2 noches con base doble) a solo un precio de $900.000.- p/persona ");
            break;
        case 2:
            alert(" ¡Felicitaciones! Elegiste tu destino: 'El Calafate, Santa Cruz' Tenemos el mejor paquete para vos: Estadia con desayuno incluido + vuelo + Excursion al Parque Nacional Los Glaciares (estadia por 3 dias y 2 noches con base doble) a solo un precio de $700.000.- p/persona.");
        break;
            case 3:
            alert(" ¡Felicitaciones! Elegiste tu destino: 'Bariloche, Neuquen' Tenemos el mejor paquete para vos: Estadia con desayuno incluido + vuelo + Excursion a Parque Nacional Nahuel Huapi (estadia por 3 dias y 2 noches con base doble) a solo un precio de $800.000.- p/persona.");
        break;
            case 4:
                alert(" ¡Felicitaciones! Elegiste tu destino: 'Ushuaia, Tierra del Fuego' Tenemos el mejor paquete para vos: Estadia con desayuno incluido + vuelo + Excursion a Parque Nacional Tierra del Fuego (estadia por 3 dias y 2 noches con base doble) a solo un precio de $700.000.- p/persona.");
            break;
            default: 
            alert(" Ud no ingreso una opcion correcta, vuelva a intentarlo y ¡acerquese mas a su proximo destino!");
    }
    let pago = parseFloat(prompt("para seguir con la compra de su paquete debe seleccionar la forma de pago: opcion 1: Efectivo en nuestras oficinas; opcion 2: Tarjeta de credito; opcion 3: Transferencia Bancaria"))
    
    switch(pago) {
        case 1: 
        alert("La direccion de nuestra Oficina es Av Viamonte 2495, CABA. Te esperamos de Lun. A Vir. de 10:00hs a 19:00hs, Tambien podes comunicarte con nocostros al: 011- 458-9962.");
        break;
        case 2: 
        alert("Podes pagar en 1/3/6 y 12 cuotas. ¡Aprovecha nuestra promo de 6 cuotas sin interes !");
        break;
        case 3: 
        alert("Los datos Bancarios son los siguientes: nro de Cuenta: 27-035895234865995663-004; Sucursal: 587; Banco Nacion; Alias: PAQUETES.TURISTICOS.VIAJESPOLAR");
        break;
    }

    let valorDestino= parseFloat
    (prompt("Ingrese el valor de su destino dentro de las siguientes 4 opciones: opcion 1:Puerto Madryn ($1.800.000), Chubut; opcion 2:El Calafate, Santa Cruz ($1.400.000), opcion 3:Bariloche,Neuquen ($1.600.000), opcion 4:Ushuaia, Tierra del Fuego ($1.400.000)"));
    if (valorDestino==1) {
        valorDestino=1800000;
    } else if (valorDestino==2 || valorDestino==4) {
        valorDestino=1400000
    } else if (valorDestino==3) {
        valorDestino=1600000;
    }else {
        alert("Ud no ingreso una opcion correcta");
    }
        
        
    let cuota= parseInt(prompt("Ingrse cantidad de cuotas: "));

        function pagoTarjeta (valorDestino,cuota) {
    if (cuota==6) {
        return valorDestino /cuota;
    }else if ( cuota==1 || cuota==3 || cuota== 12) {
        return (valorDestino*1.35)/cuota;
    }else {
    alert("El numero de cuotas ingresdos es incorrecto, recuerde que puede seleccionar 1/3/6 ó 12 cuotas.")
    }

    }

    alert( "El valor de su cuota es de : " + pagoTarjeta(valorDestino,cuota)) ;



