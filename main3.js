var modes = document.querySelector(".modes_menu");
var mode_btn = document.querySelector(".modes-btn");
var modes_height = modes.clientHeight;
modes.style.height = 0;

mode_btn.addEventListener("click", function(){
  var modes_position = modes.style.opacity;
  
  if(modes_position != 1){
    modes.style.height = `${modes_height}px`;
    modes.style.opacity = 1;
  }else{
    modes.style.height = 0;
    modes.style.opacity = 0;
  }
});


//LUXON
const DateTime = luxon.DateTime;
 
const ahora= DateTime.now()

let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
// let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");

dates.forEach((element) => {
element.setAttribute("min", inicio);
// element.setAttribute("max", fin);
});

// function calcularEstadia(checkIn, checkOut) {
//   let total = checkOut.diff(checkIn);
//   return total.as("days");
// }

// function calcularPrecioTotal(estadia, precio) {
//   return estadia * precio;
// }

const btnCalcular= document.querySelector("#calcular")
btnCalcular.addEventListener("click", () => {

let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
// let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);
 

Swal.fire({
  title: "Turno Agendado!",
  // text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal} el dia ${checkIn.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`,
  text: `Turno reservado el dia ${checkIn.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} a las 17:00hs
  por el paciente1`,

  icon: "info",
  iconColor: "#00ff00",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  position: "top-center",
  backdrop: "#445566aa",
});});

// cerrarEspecialista.addEventListener('click', () => {
//     container.classList.add("modalActives")
// })
// container.addEventListener('click', () => {
//  cerrarEspecialista.click()})

// function seleccionarPrecios(){
//   let cbxPrecios = document.getElementById('cbxPrecios');
//   let precios = cbxPrecios.value;

//   document.getElementById('lblPrecioSeleccionado').innerHTML = `Ha seleccionada   ${precios}
//   <Button id="modes-btn"  class="cesta-carrito" class="btn btn-dark"><i class='fa fa-commenting' id="especialista1">${precios}
//   </i></Button>.
  
//   <div class="modal-contenedor">
       
//   <!-- Dentro del carrito-->
//   <div class="modal-carrito">
//     <h3>Carrito</h3>


//     <!--boton para cerrar carrito-->
//     <button class="btn-cerrar-carrito">
//       <i class="fas fa-times-circle">CERRAR</i>
//     </button>
    
//     <div class="carrito-contenedor">
       
//     </div>
//     <textarea name="" id="" cols="30" rows="10"> </textarea> <button>submit</button>
//   </div>
// </div>    
// `;
// }
// const abrirCarrito = document.querySelector('.cesta-carrito');
// const modalContenedor = document.querySelector('.modal-contenedor');
// // const modalCarrito = document.querySelector('.modal-carrito')
// const cerrarCarrito = document.querySelector('.btn-cerrar-carrito');

// //Creo los distintos eventos para cuando abro y me posiciono el carrito
// abrirCarrito.addEventListener('click', () => {
//     modalContenedor.classList.toggle('modal-active')
// });

// cerrarCarrito.addEventListener('click', () => {
//     modalContenedor.classList.toggle('modal-active')
// });

// modalContenedor.addEventListener('click', () => {
//     cerrarCarrito.click()
// });