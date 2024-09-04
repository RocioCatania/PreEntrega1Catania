





const mainCarrito= document.querySelector('#mainCarrito');
const sectionCarrito= document.createElement('section');
const divCarrito= document.createElement('div');

mainCarrito.appendChild(sectionCarrito);
sectionCarrito.appendChild(divCarrito);
sectionCarrito.classList.add("sectionCarrito");
divCarrito.classList.add("divCarrito");

const divBorrarTodo=document.createElement('div');
    divBorrarTodo.classList.add("divBorrarTodo");
    sectionCarrito.appendChild(divBorrarTodo);
    const borrarTodo= document.createElement('button');
    borrarTodo.innerHTML="BORRAR CARRITO";
    divBorrarTodo.appendChild(borrarTodo);
    borrarTodo.classList.add('borrarTodo');
    borrarTodo.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
    });


let clave;

for (let i=0;i< localStorage.length;i++){
    let parrafo=document.createElement('p');
    let clave= localStorage.key(i);
    parrafo.innerHTML= localStorage.getItem(clave);
    divCarrito.appendChild(parrafo);

    
    
    const comprarElemento=document.createElement('button');
    comprarElemento.classList.add('btnComprar');
    divCarrito.appendChild(comprarElemento);    
    comprarElemento.innerHTML="Comprar";
    comprarElemento.addEventListener("click",()=> {
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Su compra se ha realizado con Exito",
            showConfirmButton: false,
            duration: 3000,
        });
        localStorage.removeItem(clave);    
        location.reload();
    });
    const borrarElemento=document.createElement('button');
    borrarElemento.classList.add('btnBorrar');
    divCarrito.appendChild(borrarElemento);
    borrarElemento.innerHTML="Borrar";
    borrarElemento.addEventListener("click",()=> {
        Swal.fire({
            title: "Estas Seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Borrado!",
                    text: "Su Paquete ha sido borrado.",
                    icon: "success",
                    timer:1500,
                });
                localStorage.removeItem(clave);    
                location.reload();
            }
        });
    });
    
    
};





