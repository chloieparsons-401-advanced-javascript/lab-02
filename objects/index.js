'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleClass = require('./vehicle-class.js');
const VehicleFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const shelby = new VehicleClass.Car('AC Cobra');
console.log(shelby.name, shelby.drive(), shelby.stop());

const ducati = new VehicleClass.Motorcycle('Diavel 1260');
console.log(ducati.name, ducati.wheelie(), ducati.stop());

// Implement a car and motorcycle using a Factory
const lotus = new VehicleFactory.CarFactory('Evora');
console.log(lotus.name, lotus.drive(), lotus.stop());

const indian = new VehicleFactory.MotorcycleFactory('Scout Bobber');
console.log(indian.name, indian.wheelie(), indian.stop());

