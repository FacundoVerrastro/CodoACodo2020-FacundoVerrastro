function validarSubmit(){
    let usuario = document.forms["form"]["usuario"].value
    let clave = document.forms["form"]["clave"].value
    if(usuario ==="" && clave===""){
        alert("El usuario y la clave estan vacias, ingrese su usuario y su clave para continuar")
        return false;
    }
    if(usuario===""){
        alert("El usuario esta vacio, ingrese su usuario para continuar")
        return false
    }
    if(clave===""){
        alert("La clave esta vacia, ingrese su clave para continuar")
        return false
    }
    if(usuario.search("@")===-1){
        alert("El usuario no posee @, ingrese un @ para continuar");
        return false
    }
    alert("Bienvenido "+usuario)
}