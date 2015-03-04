var Thermostat = function() {
    this.currentTemperature = 20;
    this.PSM = true;
};

Thermostat.prototype.increaseTemperature = function(degrees){
  this.currentTemperature += degrees;
  if (this.PSM) {
      this.currentTemperature = Math.min(25, this.currentTemperature);
  }
};

Thermostat.prototype.decreaseTemperature = function(degrees){
  this.currentTemperature -= degrees;
  this.currentTemperature = Math.max(10, this.currentTemperature);
};


Thermostat.prototype.PSMOnOff = function(mode){
  this.PSM = false;
};

Thermostat.prototype.resetBtn = function(){
  this.currentTemperature = 20;
};




// //   return this.currentTemperature < 10
// //   // if ( this.currentTemperature < 10) { return this.currentTemperature === 10; }


// // this.currentTemperature  = (condition) ? true : false
// // this.curre