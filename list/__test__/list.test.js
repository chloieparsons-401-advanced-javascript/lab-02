'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items off the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('shift removes first element in array and returns that element', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[1]).toEqual('b');
  });

  it('unshift adds items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('c');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('c');
  });

  it('provides a callback for each element in the array, in order', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.forEach(item => item+2);
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual(3);
    expect(stuff.data[1]).toEqual(4);
  });

});
