$(document).ready(function(){
    if (localStorage.getItem("logueado") != null){
        document.getElementById("datos").innerHTML = localStorage.getItem("logueado");
    }
});

//formulario de registro, guarda el usuario y la contraseña en un archivo json
$("#regi").submit ( function registro(event) {

        event.preventDefault();

        var nomregistro = document.getElementById('nomregistro').value;
    
        var passregistro = document.getElementById('passregistro').value;

        localStorage.setItem("username", nomregistro);

        localStorage.setItem("password", passregistro);

        $.ajax({
    
            type: 'POST',
    
            url: 'http://localhost:3000/usuario',
    
            data: { username: (nomregistro), password: (passregistro) },
    
            success: function () {document.getElementById("cerrate").click();},
    
            failure: function() {alert("Error!");}
    
        }); 
    return false;
    }
);



$("#login").submit( function() {
    var usuario;
    //cargo los datos del json en una variable
    $.ajax({
        type: "GET",
        dataType : 'json',
        url: 'http://localhost:3000/usuario',
        }).done(function(data){
        usuario = data;
        if (document.getElementById('username').value === usuario.username && document.getElementById('password').value === usuario.password ){
            document.getElementById("datos").innerHTML = usuario.username;
            document.getElementById("cerrate").click();
            localStorage.setItem("logueado", usuario.username);
        }
        else {
            alert (usuario.password);
            
        }
        
    });

 return false;       
}
);
/*alert(usuario.username);*/
/*function mostrarNombre() {
    if (nombre != undefined) {
        document.getElementById("datos").innerHTML = usuario.nombre;
    }
}*/


/*
            // Levanto los datos ingresados por el usuario

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        //comparo los datos del json con los del usuario

        if (username != usuario.username || password != usuario.password) {
            alert("usuario o contraseña incorrecto");
            mostrarNombre();

        } else {}  */