//Crear un usuario
document.getElementById("formulario").addEventListener("submit", crear);

//función crear

function crear(e) {
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value;
    email = document.getElementById("email").value;

    let usuario = {
        nombre,
        apellido,
        edad,
        email
    }

    if(localStorage.getItem("usuarios") === null){
        let usuarios = [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
}else{
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    leer();
document.getElementById("formulario").reset();
console.log("Usuario creado correctamente");
e.preventDefault();

}

//función leer
function leer(){
     let usuarios = JSON.parse(localStorage.getItem("usuarios"));
     document.getElementById("tbody").innerHTML = "";
     for(let i = 0; i < usuarios.length; i++){
         let nombre = usuarios[i].nombre;
         let apellido = usuarios[i].apellido;
         let edad = usuarios[i].edad;
         let email = usuarios[i].email;

         document.getElementById("tbody").innerHTML += `
         <tr>
             <td>${nombre}</td>
             <td>${apellido}</td>
             <td>${edad}</td>
             <td>${email}</td>
         </tr>
         `
     }
}


