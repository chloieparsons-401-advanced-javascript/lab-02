'use strict';

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive();
  stop(); 
}

class Car {
  constructor(name){
    this.name = name;
  }

  class Car extends Vehicle {
    constructor(name){
      super(name);
    }
  }
}

class Motorcycle {
  constructor(name){
    this,name = name;
  }
  class Motorcycle extends Vehicle {
    constructor(name){
      super(name);
    }
  }
  wheelie();
}
  
module.exports = {Car, Motorcycle};