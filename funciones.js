
function Refrescar_Topos() {

  //let num_alea=parseInt(Math.random() * 9);
  //console.log(num_alea);

  $('td').each(function () {
    if ($(this).hasClass('active')) {
      console.log("entra!!!!");
      if ($(this).children().attr('src') == 'img/hole.png') {
        $(this).children().attr('src', 'img/topo1.png');
      }

      else if ($(this).children().attr('src') == 'img/topo1.png') {
        $(this).children().attr('src', 'img/topo2.png');
      }
      else if ($(this).children().attr('src') == 'img/topo2.png') {
        $(this).children().attr('src', 'img/topo3.png');
      }
      else if ($(this).children().attr('src') == 'img/topo3.png') {
        $(this).children().attr('src', 'img/topo4.png');
      }
      else if ($(this).children().attr('src') == 'img/topo4.png') {
        $(this).children().attr('src', 'img/topo5.png');
      }
      else if ($(this).children().attr('src') == 'img/topo5.png') {
        $(this).children().attr('src', 'img/topo6.png');
      }
      else if ($(this).children().attr('src') == 'img/topo6.png') {
        $(this).children().attr('src', 'img/topo7.png');
      }
      else if ($(this).children().attr('src') == 'img/topo7.png') {
        $(this).children().attr('src', 'img/hole.png')
        $(this).removeClass('active')
      }

    }
    else {
      //generar un numero aleatorio entre 1 y 100 y si es 1,2,3 o 4 lo pone activo
      let num_alea = parseInt(Math.random() * 100);
      if (num_alea < 4) {
        $(this).addClass('active')
      }

      if ($(this).children().attr('src') == 'img/golpe2.png') {
        $(this).children().attr('src', 'img/hole.png');
      }

    }
  });


};


$(document).ready(function () {
	let contador=0;
  setInterval(Refrescar_Topos, 1000);


  $('td').click(function () {
    //console.log('holaa');
	
    contador++;
	$("#cont").text(contador);
   /* alert('Has dado click  ' + contador +'veces');*/
		
    if ($(this).children().attr('src') == 'img/topo3.png') {
      $(this).children().attr('src', 'img/golpe2.png');
      $(this).removeClass('active');

    }
    else if ($(this).children().attr('src') == 'img/topo4.png') {
      $(this).children().attr('src', 'img/golpe2.png');
      $(this).removeClass('active');
    }
    else if ($(this).children().attr('src') == 'img/topo5.png') {
      $(this).children().attr('src', 'img/golpe2.png');
      $(this).removeClass('active');
    }
    else if ($(this).children().attr('src') == 'img/golpe2.png') {
      $(this).children().attr('src', 'img/hole.png');
      $(this).removeClass('active');
    }

  });




});







  





