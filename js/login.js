/*var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/persona');
ourRequest.onload = function(){
    console.log(ourRequest.responseText);
};
ourRequest.send();*/
 /* localStorage.setItem("username", nomregistro);
    localStorage.setItem("password", passregistro);*/

function registro() {
    var nomregistro = document.getElementById('nomregistro').value;
    var passregistro = document.getElementById('passregistro').value;
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/persona',
        data: { usuario: JSON.stringify(nomregistro), contraseña: JSON.stringify(passregistro) },
        success: function () {document.getElementById("cerrate").click();},
        failure: function() {alert("Error!");}
    }); 
}
var nombre;

function login() {
    var login = new XMLHttpRequest();
    login.open('GET', 'http://localhost:3000/persona');
    login.onload = function(){
        console.log(login.responseText);
    };
        // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username != localStorage.username || password != localStorage.password){
            alert ("usuario o contraseña incorrecto");

        }
        else{
           nombre = username;
           mostrarNombre();
           return true;
        }
        }
        


function mostrarNombre() {
    if (nombre != undefined){
         document.getElementById("datos").innerHTML = nombre;
        }
            }
         
   
