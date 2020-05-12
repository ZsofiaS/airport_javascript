'use strict';

describe('Feature test:', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
    //weather = new Weather();
  })

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toEqual([plane]);
  })
  it('planes can be instructed to take off from airport', function() {
    plane.land(airport)
    plane.take_off();
    expect(airport.planes()).not.toContain(plane);
  })
  it('planes cannot takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() { plane.take_off();}).toThrowError('cannot take off');
    expect(airport.planes()).toContain(plane);
  })
})
