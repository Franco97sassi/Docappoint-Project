
const doctores =
[
    { id: 1, nombre: "Doctor1", especialidad: "Odontólogo",img: "1.jpeg" ,sintoma:"caries,encias"},
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
  
consulta.addEventListener("input", () => {
  let nuevoFiltro = filtrar2(consulta.value ) 
  crearHTML2(nuevoFiltro);
  });