function login() {
        // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username && password) {
            if (localStorage.username == username){
                // Validar password
                if (localStorage.password = password) {
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
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        // Mostrar DAtos del usuario Logueado
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre;
    } 
}

function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function mostrarError() {
    document.getElementById("error").innerHTML = "Usuario/Password invalido";
}