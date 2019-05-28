'use strict';

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive();
  stop(); 
};

class Car extends Vehicle {
  constructor(name, wheels){
    super(name, wheels);
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels){
    super(name, wheels);
  }

  wheelie() { 
    
  }
}
  
module.exports = {Car, Motorcycle};