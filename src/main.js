import $ from 'jquery';
import './style.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tamagotchi from './tamagotchi';



$(document).ready(function() {
  let tam = new Tamagotchi("player");

  tam.setFood();
  tam.setFun();
  tam.setRest();


  $("#feed").click(function() {
    tam.feed();
  });

  $("#play").click(function() {
    tam.play();
  });

  $("#rest").click(function() {
    tam.rest();
  });

  $("#refresh").click(function() {
    tam.reset();
  })

  setInterval(() => {
      if (tam.didYouDie() == false) {
      $("#showFood").text(tam.foodLevel);
      $("#showFun").text(tam.funLevel);
      $("#showRest").text(tam.restLevel);
      } else {
      $('#petDie').text(`your pet has died!`);
      }
    }, 500);



function reset() {
  location.reload(true);
}

  // let die = tam.didYouDie;
  //
  //   while (die == false) {
  //   $("#showFood").text(tam.foodLevel);
  //   $("#showFun").text(tam.funLevel);
  //   $("#showRest").text(tam.restLevel);
  //   }

});
