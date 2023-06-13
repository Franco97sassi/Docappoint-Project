const formIngresar=document.querySelector("#login")
userInput=document.querySelector("#user");
passInput=document.querySelector("#pass");
p=document.querySelector("#mensaje");


function inicioSesion(usuarios){
    let userFound=usuarios.find((usuario)=>{
        return usuario.nombre==userInput.value && usuario.password==passInput.value;
    })

 
if(userFound){
    window.location.href="doctor1EspecialistaSesion.html";
}else{
    document.querySelector("#mensaje").innerText="Usuario o contraseña incorrectos";
     ;
}}
function recuperarLS(){
    return JSON.parse(localStorage.getItem( "usuarios" ));
}
const usuariosLS=recuperarLS();

formIngresar.addEventListener('submit',(e)=>{
     e.preventDefault();
    inicioSesion(usuariosLS);
    
}) 