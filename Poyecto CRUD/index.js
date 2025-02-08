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
             <td><button onclik="eliminar('${nombre}')"class="btn btn-danger">Eliminar</button></td> 
             <td><button onclik="editar('${nombre}')"class="btn btn-success">Editar</button></td>   
         </tr>   
         `
     }
}

//función editar
function editar(nombre){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nombre === nombre){
            document.getElementById("body").innerHTML = `
            <form class="form">
                <input type="text" class="form-control form_input"  placeholder="${usuario[i].nombre} " id="newnombre">
                <input type="text" class="form-control form_input" placeholder="${usuario[i].apellido}" id="newapellido">
                <input type="number" class="form-control form_input" placeholder="${usuario[i].edad}" id="newedad">
                <input type="email" class="form-control form_input" placeholder="${usuario[i].email}" id="newemail">
                <button class="btn
                btn-success" onclick="actualizar('${i}')">Actualizar</button>
                <button class="btn
                btn-primary" onclick="VistaPrincipal()>Cancelar</button>

                </div>    
            </form>

            `
        }
    }
}

//función actualizar
function actualizar(i){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    usuarios[i].nombre = document.getElementById("newnombre").value;
    usuarios[i].apellido = document.getElementById("newapellido").value;
    usuarios[i].edad = document.getElementById("newedad").value;
    usuarios[i].email = document.getElementById("newemail").value;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    vistaPrincipal();
    leer();
}

//función eliminar
function eliminar(nombre){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].nombre === nombre){
            usuarios.splice(i, 1);
        }
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    leer();
}

//funcion para mostrar la interfaz principal
function vistaPrincipal(){
    document.getElementById("body").innerHTML = `
    <form id="formulario">
        <input type="text" class="form-control form_input" placeholder="Nombre" id="nombre">
        <input type="text" class="form-control form_input" placeholder="Apellido" id="apellido">
        <input type="number" class="form-control form_input" placeholder="Edad" id="edad">
        <input type="email" class="form-control form_input" placeholder="Email" id="email">
        <button class="btn btn-primary">Crear</button>
    </form>
    <table class="table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
    </table>
    `
}

leer();