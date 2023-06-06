const formRegister=document.querySelector('#formReg');
email=document.querySelector('#email');
nombre=document.querySelector('#nombre');
userReg=document.querySelector('#userReg');
passReg=document.querySelector('#passReg');
btnRegistrar=document.querySelector('#registrar');
 

let usuarios;
if(localStorage.getItem("usuarios") ){
    usuarios=JSON.parse(localStorage.getItem("usuarios"));
}else{
    usuarios=[];
}
class Usuario{
    constructor(nombre,usuario,email,password){
        this.nombre=nombre;
        this.usuario=usuario;
        this.email=email;
        this.password=password;
         
    }
}
function guardarUsuario(usuario){
    return usuarios.push(usuario);
}
function guardarEnLs(arr){
    return localStorage.setItem("usuarios",JSON.stringify(arr));
}

formRegister.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newUser=new Usuario(nombre.value,userReg.value,email.value,passReg.value);
    guardarUsuario(newUser);
    guardarEnLs(usuarios);  
    formRegister.reset(); 
})