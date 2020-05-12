'use strict';

describe('Feature test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  describe('good weather', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0);
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
  });
  describe('stormy weather', function() {

    it('planes cannot takeoff when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function() { plane.take_off();}).toThrowError('cannot take off');
      expect(airport.planes()).toContain(plane);
    })
    it('planes cannot land when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(function() { plane.land(airport);}).toThrowError('cannot land');
      expect(airport.planes()).toEqual([]);
    })
  })
})
