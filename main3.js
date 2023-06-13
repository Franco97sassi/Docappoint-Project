var modes = document.querySelector("#modes_menu");
var mode_btn = document.querySelector("#modes-btn");
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