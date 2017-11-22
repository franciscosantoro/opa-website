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
    alert ("dsuvysvidsvcdsivi!!!!!!1")
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/persona',
        data: {
            username: (nomregistro),
            password: (passregistro)
        },
        success: function () {
            document.getElementById("cerrate").click();
        },
        failure: function () {
            alert("Error!");
        }
    });
}

function login() {
    //cargo los datos del json en una variable
    var usuario = $.ajax({
        type: "GET",
        dataType : 'json',
        url: 'http://localhost:3000/persona',
        success: function(){
            // Levanto los datos ingresados por el usuario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        //comparo los datos del json con los del usuario
        if (username != usuario.username || password != usuario.password) {
            alert("usuario o contraseña incorrecto");
            mostrarNombre();

        } else {
            
            return true;
        }
    }
        
    });
    
        



function mostrarNombre() {
    if (nombre != undefined) {
        document.getElementById("datos").innerHTML = usuario.nombre;
    }
}