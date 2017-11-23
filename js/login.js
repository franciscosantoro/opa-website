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
        alert(usuario.username);
    });

 return false;       
}
);

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