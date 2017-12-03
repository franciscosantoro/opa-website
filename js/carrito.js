$(document).ready(function(){
        $.ajax({
            type: "GET",
            dataType : 'json',
            url: 'http://localhost:3000/catalogo',
            }).done(function(data){
                catalogo = data;
                mostrar();
            })
            
});

var catalogo;

function mostrar(){
   
    for (i=0;i<=catalogo.length;i++){
        var template = `
        <div class="caja" id="">
        <div class="img-prod">
             <img src="images/" alt="Img" />
         </div>

         <div class="datos-prod">
             <h2 class="titulo">${catalogo[i].nombre}</h2>
             <h3 class="precio"></h3>
         </div>

         <div class="detalles-prod">
             <div>
                 <p class="descripcion"></p>

                 <div class="botones-prod">

                     <div class="add-carrito">
                         <span>
                             <i class="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; Comprar</span>
                     </div>
                     <div class="ver-mas">
                         <span>
                             <i class="fa fa-eye" aria-hidden="true"></i>&nbsp; Ver más</span>
                     </div>
                 </div>
             </div>
         </div>
        `
        $("#productos").innerHTML = template;
    }
    

};



/*TODO ESTO ES UN CLON DEL SCRIPT PARA EL MODAL QUE SE USA EN EL LOGIN*/ 

// Get the modal
var carrito = document.getElementById('carrito');

// Get the button that opens the modal
var btnCarr = document.getElementById("btnCarrito");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnCarr.onclick = function() {
    document.getElementById("clicktab").click();
    carrito.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    carrito.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == carrito) {
        carrito.style.display = "none";
    }
} 

function openTab(evt, accion) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(accion).style.display = "block";
    evt.currentTarget.className += " active";
}








