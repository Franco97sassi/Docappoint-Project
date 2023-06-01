//Funcion para filtrar productos
const doctores =
[
    { id: 1, nombre: "doctor1", especialidad: "ginecologia",img: "1.jpeg" },
    { id: 2, nombre: "doctor2", especialidad: "cardiologo",img: "2.jpeg" },
    { id: 3, nombre: "doctor3", especialidad: "cirujano",img: "3.jpeg" },
    { id: 4, nombre: "doctor4", especialidad:  "pediatra",img: "4.jpeg" },
    { id: 5, nombre: "doctor5", especialidad: "endocrinologo",img: "5.jpeg" },
   
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
function crearHTML(doctores) {
    let html;
    contenedor.innerHTML = "";
    for (const doctor of doctores) {
      html = ` <tr><td>${doctor.id}<img src="./img/${doctor.img}"/> </img></td>
             
           <td>${doctor.id}</td>
            
              <td>  ${doctor.nombre}   </td>
              <td> ${doctor.especialidad}</td>
        </tr>`
      contenedor.innerHTML += html;
    }
    // tbody.innerHTML += html
  
  }
  crearHTML(doctores)
 
function filtrar(filtro) {
    let filtrado = doctores.filter((el) => {
      return el.especialidad.includes(filtro);
    })
    return filtrado;
  }
   
const search = document.querySelector("#search");

search.addEventListener("input", () => {
    let filtro = filtrar(search.value)
    crearHTML(filtro)
  })

  crearHTML()

  const consulta = document.querySelector("#consulta");
 w(){let entrada=prompt("ingrese sintoma");
 while(entrada!=no){
    switch(entrada){
         case "fiebre":
             crearHTML(filtrar("pediatra"))
 }}
}
w()
   
