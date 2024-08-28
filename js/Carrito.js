
const mainCarrito= document.querySelector('#mainCarrito');
const sectionCarrito= document.createElement('section');
const divCarrito= document.createElement('div');
const divBorrarTodo=document.createElement('div');
const borrarTodo= document.createElement('button');
borrarTodo.innerHTML="BORRAR CARRITO";

mainCarrito.appendChild(sectionCarrito);
sectionCarrito.appendChild(divCarrito);
divCarrito.appendChild(divBorrarTodo);
divBorrarTodo.appendChild(borrarTodo);
divBorrarTodo.classList.add("divBorrarTodo");
sectionCarrito.classList.add("sectionCarrito");
divCarrito.classList.add("divCarrito");

borrarTodo.addEventListener("click",()=>{
    localStorage.clear();
})

let clave;
for (let i=0;i< localStorage.length;i++){
    let clave= localStorage.key(i);
    divCarrito.innerHTML="  $ " + localStorage.getItem(clave);
    const borrarElemento=document.createElement('button');
    divCarrito.appendChild(borrarElemento);
    borrarElemento.innerHTML="borrar";
    borrarElemento.addEventListener("click",()=> {
        localStorage.removeItem(clave);
        location.reload();
    });
}





