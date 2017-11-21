function registro() {
    var nomregistro = document.getElementById('nomregistro').value;
    var passregistro = document.getElementById('passregistro').value;
    
    localStorage.setItem("username", nomregistro);
    localStorage.setItem("password", passregistro);
}
var nombre;

function login() {
        // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username != localStorage.username || password != localStorage.password){
            alert ("usuario o contraseña incorrecto");

        }
        else{
           nombre = username;
           document.getElementById('login').submit();
           return true;
        }
        }
        


function mostrarNombre() {
    if (nombre != undefined){
         document.getElementById("datos").innerHTML = nombre;
         return true;
        }
            }
         
   
