$(document).ready(function(){

	var imgItems = $('.slider li').length;  //cuenta la cantidad de imagenes(slide)
	var imgPos = 1;

    //este for agrega la paginacion(los circulos para pasar de imagen)
    /*for(i = 1; i <= imgItems; i++) {

    	$('.pagination').append('<li><span class="fa fa-circle"></span></li>');

    }*/


	$('.slider li').hide(); //oculta los slide
	$('.slider li:first').show();//muestra el primer slide
	//$('.pagination li:first').css({"color": "#CD6E2E"}); //le da color al primer item de paginacion


//ejecutamos todas las funciones

//$('.pagination li').click(pagination);
$('.right span').click(nextSlider);
$('.left span').click(prevSlider);


//funcionees

/*function pagination(){

	var paginationposi = $(this).index() + 1;


	$('.slider li').hide(); // Oculta todos los slide al hacer clic en paginacion
	$('.slider li:nth-child('+ paginationposi +')').fadeIn(); //muestra el slide seleccionado
     
     // estilo para la paginacion
    $('.pagination li').css({'color': '#858585'});
	$(this).css({'color':'#CD6E2E'})

}*/

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


});