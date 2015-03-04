var thermostat = new Thermostat();
$(document).ready(function() {

  function textDisplay(){
    $('#temperature').text(thermostat.currentTemperature);
  };

  textDisplay();

  $('.decreaseTemp').on('click', function() {
    console.log('i am here');
    thermostat.decreaseTemperature(1);
    textDisplay();
  });

  $('.increaseTemp').on('click', function(){
    thermostat.increaseTemperature(1);
    textDisplay();
  });

  $('.reset').on('click', function(){
    thermostat.resetBtn();
    textDisplay();
  });

  $('.switch').on('click',function(){
    thermostat.PSMOnOff();
    textDisplay();
  });

  $('.switch').on('click', function(){
    Thermostat.PSM
    textDisplay();
  });

});
