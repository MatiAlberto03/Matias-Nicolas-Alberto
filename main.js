function borrarPais(){
    let paises= document.getElementsByClassName("paises")
    paises[0].remove()
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value
    document.body.append("El nombre del usuario es: " + nombreUsuario + "y va a cumplir " + (edadUsuario+1))


}
