describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.currentTemperature).toEqual(20);
  });

  it('can increase the temperature by one degrees', function() {
    thermostat.increaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(21);
  });

  it('can increase the temperature by 5 degrees', function () {
    thermostat.increaseTemperature(5);
    expect(thermostat.currentTemperature).toEqual(25);
  });

  it('can decrease the temperature by 1 degrees', function() {
    thermostat.decreaseTemperature(1);
    expect(thermostat.currentTemperature).toEqual(19);
  });

  it('can decrease the temperature by 5 degrees', function() {
    thermostat.decreaseTemperature(5);
    expect(thermostat.currentTemperature).toEqual(15);
  });

  it('has a minimum temperature of 10 degrees', function() {
    thermostat.decreaseTemperature(16);
    expect(thermostat.currentTemperature).toEqual(10);
  });

  it('has a power saving mode ON by default', function() {
    // thermostat.PSM = true;
    expect(thermostat.PSM).toEqual(true);
  });

  it('can be set to OFF', function() {
    thermostat.PSMOnOff(false);
    expect(thermostat.PSM).toEqual(false);
  });

  it('has a maxmimum temp of 25 degrees when PSM is ON', function() {
    thermostat.increaseTemperature(20);
    expect(thermostat.currentTemperature).toEqual(25);
  });

  it('can reset the temperature when clicked on the reset button', function() {
    thermostat.increaseTemperature(5);
    thermostat.resetBtn();
    expect(thermostat.currentTemperature).toEqual(20);
  });


});