//esta parte se encarga de corroborar si ya estas logueado o no, en caso de estarlo muestra el nombre de usuario en el header
$(document).ready(function(){
    if (localStorage.getItem("logueado") != null){
        document.getElementById("datos").innerHTML = localStorage.getItem("logueado");
    }
    else{
        document.getElementById("datos").innerHTML = "Iniciar sesión";
        $("#datos").click(function(){
            $("#myBtn").click();
            $("#iniciarsesion").click();
        });
    }
});

//formulario de registro, guarda el usuario y la contraseña en un archivo json
$("#regi").submit ( function registro(event) {

        event.preventDefault();

        var nomregistro = document.getElementById('nomregistro').value;
    
        var passregistro = document.getElementById('passregistro').value;

        $.ajax({
    
            type: 'POST',
    
            url: 'http://localhost:3000/usuario',
    
            data: { username: (nomregistro), password: (passregistro) },
    
            success: function () {
                document.getElementById("cerrate").click();
                localStorage.removeItem("logueado");
                document.getElementById('nomregistro').value = "";
                document.getElementById('passregistro').value = "";
                document.getElementById('regiemail').value = "";
                document.getElementById('reginombre').value = "";
                document.getElementById('regiapell').value = "";
        },
    
            failure: function() {alert("Error!");}
    
        }); 
    return false;
    }
);


/*Esta función se encarga del inicio de sesión comparando el contenido del archivo json con los valores ingresados en los campos,
en caso de no ingresar los datos correctos se muestra un error, de lo contrario aparece el nombre de usuario en el header
(al cual se le agregarán funcionalidades )*/
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
            location.reload();
        }
        else {
            alert ("Usuario o contraseña incorrecta");
            
        }
        
    });
    
 return false;       
}
);



/*todo esto es código chatarra que guardo por si acaso*/
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

        } else {}  
        
         localStorage.setItem("username", nomregistro);

        localStorage.setItem("password", passregistro);
        
        
        */