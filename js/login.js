function login() {
        // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (localStorage.username == username && localStorage.password == password) {
                // Validar password
                    mostrarDatos();
                }
            }
            else {
                mostrarError();
                
            }
        }
        return true;
}

function mostrarDatos() {
    if ((localStorage.username != undefined) && (localStorage.password != undefined)) {
        // Mostrar Datos del usuario Logueado
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.username;
    } 
}

function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function mostrarError() {
    document.getElementById("error").innerHTML = "Usuario/Password invalido";
}