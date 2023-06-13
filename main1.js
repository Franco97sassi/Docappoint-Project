
const doctores =
[
  { id: 1, nombre: "Odontologo1", especialidad: "Odontólogo",img: "1.jpeg" ,sintoma:"caries,encias"},
  { id: 2, nombre: "Odontologo2", especialidad: "Odontólogo",img: "odontologo2.jpeg" ,sintoma:"caries,encias"},
  { id: 3, nombre: "Odontologo3", especialidad: "Odontólogo",img: "odontologo3.jpeg" ,sintoma:"caries,encias"},
     { id: 2, nombre: "Doctor2", especialidad: "Cardiologo",img: "2.jpeg",sintoma: "corazon,pecho"},
    { id: 3, nombre: "Doctor3", especialidad: "Infectologo",img: "3.jpeg",sintoma:"fiebre,garganta"  },
    { id: 4, nombre: "Doctor4", especialidad:  "Otorrinolaringolo",img: "4.jpeg",sintoma:"oido,nariz,garganta,cabeza,cuello"  },
    { id: 5, nombre: "Doctor5", especialidad: "Endocrinologo",img: "5.jpeg",sintoma:"obesidad,diabetes"},
   
]
 
  function crearHTML2(doctores) {
    let html1;
    contenedor2.innerHTML = "";
    for (const doctor of doctores) {
      html1 = ` <tr><td> <img src="./img/${doctor.img}"/> </img></td>
             
           <td>${doctor.id}</td>
            
              <td>  ${doctor.nombre}   </td>
              <td> ${doctor.especialidad}</td>
        </tr>`
      contenedor2.innerHTML += html1; 
    }
    // tbody.innerHTML += html
  
  }


function filtrar2(filtro) {
    let filtrado= doctores.filter((el) => {
      return el.sintoma.includes(filtro);
    } )
    return filtrado;}

const consulta = document.querySelector("#consulta");
if(consulta){  
consulta.addEventListener("input", () => {
  let nuevoFiltro = filtrar2(consulta.value ) 
  crearHTML2(nuevoFiltro);
  })};



const btnTurnos = document.getElementsByClassName('btnTurnos');
const modalCalendar = document.getElementsByClassName('modalCalendar');

// btnTurnos.addEventListener( "click" ,()=>{
//     modalCalendar.classList.toggle('modal-active');
// })
// btnTurnos.addEventListener('click',()=>{
//   modalCalendar.innerHTML=` hola`
// })

const as= document.getElementById('as');
if(as){  
as.addEventListener('click',()=>{
  modalCalendar.classList.toggle('modal-active'); 
} )}
 

const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");
 
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
    text: `Turno reservado el dia ${checkIn.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} a las 17:00hs`,

    icon: "info",
    iconColor: "#00ff00",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    position: "top-center",
    backdrop: "#445566aa",
  });});


 