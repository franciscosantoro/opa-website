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
    
    }
);

var usuario;

$("#login").submit ( function login() {
    //cargo los datos del json en una variable
    $.ajax({
        type: "GET",
        async: false,
        dataType : 'json',
        url: 'http://localhost:3000/usuario',
        success: function(data){
            usuario = data;
            usuario = JSON.parse;
            alert(usuario);
        }
    });
/*
            // Levanto los datos ingresados por el usuario

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        //comparo los datos del json con los del usuario

        if (username != usuario.username || password != usuario.password) {
            alert("usuario o contraseña incorrecto");
            mostrarNombre();

        } else {}  */
        
}
);

/*function mostrarNombre() {
    if (nombre != undefined) {
        document.getElementById("datos").innerHTML = usuario.nombre;
    }
}*/