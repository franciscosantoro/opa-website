function registro() {
    var nomregistro = document.getElementById('nomregistro').value;
    var passregistro = document.getElementById('passregistro').value;
    
    localStorage.setItem("username", nomregistro);
    localStorage.setItem("password", passregistro);
}

function login() {
        // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        }
        


function mostrarNombre() {
    if (localStorage.username != undefined){
    /*document.getElementById =('login').onsubmit = function(){
        if (localStorage.username == username && localStorage.password == password){*/
         document.getElementById("datos").innerHTML = username;
        }
            }
         
   

function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function mostrarError() {
    document.getElementById("datos").innerHTML = "Usuario/Password invalido";
}