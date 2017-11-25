$(document).ready(function(){

	var imgItems = $('.slider li').length;  //cuenta la cantidad de imagenes(slide)
	var imgPos = 1;


	$('.slider li').hide(); //oculta los slide
	$('.slider li:first').show();//muestra el primer slide


//ejecutamos todas las funciones

$('.right span').click(nextSlider);
$('.left span').click(prevSlider);


//funcionees

function nextSlider(){

	if (imgPos >= imgItems){imgPos = 1;}
	 else {
		imgPos++;
	}


$('.slider li').hide(); // Oculta todos los slide al hacer clic en paginacion
	$('.slider li:nth-child('+ imgPos +')').fadeIn(); //muestra el slide seleccionado

}

function prevSlider(){

	if (imgPos <= 1){imgPos = imgItems;}
	 else {imgPos--;
	}




$('.slider li').hide(); // Oculta todos los slide al hacer clic en paginacion
	$('.slider li:nth-child('+ imgPos +')').fadeIn(); //muestra el slide seleccionado

}

setInterval(function(){
   nextSlider();

}, 4000);

setTimeout(function(){
	$('.caja').addClass('magictime swashIn cajavisible');
}, 500);

});