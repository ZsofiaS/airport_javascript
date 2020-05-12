'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var plane2;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  })
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  })
  it('can instruct a plane to land', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  })
  it('can instruct a plane to take off', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  })
  it('can check for bad weather', function() {
    expect(airport.isStormy()).toBeFalsy();
  })
  describe('in bad weather', function() {
    it('does not allow planes to takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('cannot take off');
    })
    it('does not allow planes to land', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane);}).toThrowError('cannot land');
    })
  })
})
