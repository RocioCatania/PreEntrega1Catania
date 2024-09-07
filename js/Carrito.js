



const mainCarrito = document.querySelector('#mainCarrito');
const sectionCarrito = document.createElement('section');
const divCarrito = document.createElement('div');
const divBorrarTodo = document.createElement('div');
const borrarTodo = document.createElement('button');

sectionCarrito.classList.add("sectionCarrito");
divCarrito.classList.add("divCarrito");
divBorrarTodo.classList.add("divBorrarTodo");
borrarTodo.classList.add('borrarTodo');
borrarTodo.innerHTML = "BORRAR CARRITO";

mainCarrito.appendChild(sectionCarrito);
sectionCarrito.appendChild(divCarrito);
sectionCarrito.appendChild(divBorrarTodo);
divBorrarTodo.appendChild(borrarTodo);

borrarTodo.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

for (let i = 0; i < localStorage.length; i++) {
    let parrafo = document.createElement('p');
    let clave = localStorage.key(i);
    const viajeData = JSON.parse(localStorage.getItem("Paquete Elegido"));

    if (viajeData) {
        const clavesMostrar = ['desde', 'hasta', 'personas', 'llegada', 'salida', 'precioFinal'];
        let contenido = `<h3>¡Felicitaciones! <br> Usted eligió este paquete:</h3>`;

        for (const [clave, valor] of Object.entries(viajeData)) {
            if (clavesMostrar.includes(clave)) {
                contenido += `<p><strong>${clave}:</strong> ${valor}</p>`;
            }
        }

        parrafo.innerHTML = contenido;
        divCarrito.appendChild(parrafo);
    } else {
        parrafo.innerHTML = localStorage.getItem(clave);
        divCarrito.appendChild(parrafo);
    }

    const comprarElemento = crearBoton("Comprar", "btnComprar", () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Su compra se ha realizado con éxito",
            showConfirmButton: false,
            timer: 3000,
        }).then(() => {
            localStorage.removeItem(clave);
            location.reload();
        });
    });
    divCarrito.appendChild(comprarElemento);

    const borrarElemento = crearBoton("Borrar", "btnBorrar", () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Borrado!",
                    text: "Su paquete ha sido borrado.",
                    icon: "success",
                    timer: 1500,
                }).then(() => {
                    localStorage.removeItem(clave);
                    location.reload();
                });
            }
        });
    });
    divCarrito.appendChild(borrarElemento);
}

function crearBoton(texto, clase, callback) {
    const boton = document.createElement('button');
    boton.classList.add(clase);
    boton.innerHTML = texto;
    boton.addEventListener("click", callback);
    return boton;
}




