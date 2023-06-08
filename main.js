//Funcion para filtrar productos
const doctores =
[
    { id: 1, nombre: "Doctor1", especialidad: "Odontólogo",img: "1.jpeg" ,sintoma:"caries,encias"},
    { id: 2, nombre: "Doctor2", especialidad: "Cardiologo",img: "2.jpeg",sintoma: "corazon,pecho"},
    { id: 3, nombre: "Doctor3", especialidad: "Infectologo",img: "3.jpeg",sintoma:"fiebre,garganta"  },
    { id: 4, nombre: "Doctor4", especialidad:  "Otorrinolaringolo",img: "4.jpeg",sintoma:"oido,nariz,garganta,cabeza,cuello"  },
    { id: 5, nombre: "Doctor5", especialidad: "Endocrinologo",img: "5.jpeg",sintoma:"obesidad,diabetes"},
   
]


// const mostrarDoctores = (doctores) => {
//     const contenedorDoctores = document.getElementById("doctor-contenedor");
  
//     contenedorDoctores.innerHTML= "";
  
//     doctores.forEach(doctor => {
//       const div = document.createElement('div');
//       div.classList.add('card');
//       div.innerHTML += `<div class="card-image">
//                           <img src=${doctor.img}>
//                           <span class="card-title">${doctor.nombre}</span>
//                           <span class="card-title">${doctor.especialidad}</span>
//                          </div>
                         
//                        `
//                        contenedorDoctores.appendChild(div);
  
    //   const boton = document.getElementById(`boton${producto.id}`);
    //   boton.addEventListener("click", () => {
    //     validarProductoRepetido(producto.id);
    //   });
//     });
//   };
  
//   document.addEventListener('DOMContentLoaded', () => {
//       mostrarDoctores(doctores);
  
       
//   });
contenedor = document.querySelector("#contenedor");
function crearHTML(doctores) {
    let html;
    contenedor.innerHTML = "";
    for (const doctor of doctores) {
      html = ` <tr><td> <img src="./img/${doctor.img}" /> </img></td>
             
           <td>${doctor.id}</td>
            
              <td>  ${doctor.nombre}   </td>
              <td> ${doctor.especialidad}</td>
        </tr>`
      contenedor.innerHTML += html;
    }
    // tbody.innerHTML += html
  
  }
  crearHTML(doctores)
 
  contenedor2 = document.querySelector("#contenedor2");
 
  function crearHTML2(doctores) {
    let html1;
    contenedor2.innerHTML = "";
    for (const doctor of doctores) {
      html1 = ` <tr><td> <img  src="./img/${doctor.img}" width="100px" heigth="100px"/> </img></td>
             
           <td>${doctor.id}</td>
            
              <td>  ${doctor.nombre}   </td>
              <td> ${doctor.especialidad}</td>
        </tr>`
      contenedor2.innerHTML += html1; 
    }
    // tbody.innerHTML += html
  
  }


function filtrar(filtro) {
    let filtrado= doctores.filter((el) => {
      return el.especialidad.includes(filtro);
    } )
    return filtrado;
  } 
  function filtrar2(filtro) {
    let filtrado= doctores.filter((el) => {
      return el.sintoma.includes(filtro);
    } )
    return filtrado;}
//   //   let filtrado = doctores.filter((el) => {
//   //     return el.especialidad.includes(filtro);
//   //   })
//   //   return filtrado;
//   // }
   
 const search = document.querySelector("#search");

search.addEventListener("input", () => {
    let filtro = filtrar(search.value)
    crearHTML(filtro)
  })

//   crearHTML()

  const consulta = document.querySelector("#consulta");
  
consulta.addEventListener("input", () => {
  let nuevoFiltro = filtrar2(consulta.value ) 
  crearHTML2(nuevoFiltro);
  });

  
  
  // contenedor3 = document.querySelector("#contenedor3");
 
  // function crearHTML3(doctores) {
  //   let html;
  //   contenedor3.innerHTML = "";
  //   for (const doctor of doctores) {
  //     html = ` <tr><td> <img src="./img/${doctor.img}"/> </img></td>
             
  //          <td>${doctor.id}</td>
            
  //             <td>  ${doctor.nombre}   </td>
  //             <td> ${doctor.especialidad}</td>
  //             <td>  <button id="detalles">Consultar </button></td>
  //       </tr>`
  //     contenedor3.innerHTML += html;
  //   }
  //   // tbody.innerHTML += html
  
  // }
  // crearHTML3(doctores)
  // detalles=document.querySelector("#detalles")
  // detalles.addEventListener("click",()=>{
  //   alert("hola")
  // } )

 
const DateTime = luxon.DateTime;

const ahora= DateTime.now()
horaActual.value=ahora.toLocaleString(DateTime.TIME_24_SIMPLE)
let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");

const evento= document.getElementById('evento');
const tipo= document.getElementById('tipo');
const total= document.getElementById('total');
const fecha= document.getElementById('fecha');

const btnTurnos = document.getElementsByClassName('btnTurnos');
const modalCalendar = document.getElementsByClassName('modalCalendar');

btnTurnos.addEventListener('click',()=>{
    modalCalendar.classList.toggle('modal-active');
})
// btnTurnos.addEventListener('click',()=>{
//   modalCalendar.innerHTML=` hola`
// })

const as= document.getElementById('as');
as.addEventListener('click',()=>{
  alert("hola")
} )