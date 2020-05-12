'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');

  })
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  })

  describe('good weather', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });
    it('can instruct a plane to land', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    })
    it('can instruct a plane to take off', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    })
  })

  describe('bad weather', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });
    it('does not allow planes to takeoff', function() {
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('cannot take off');
    })
    it('does not allow planes to land', function() {
      expect(function() { airport.clearForLanding(plane);}).toThrowError('cannot land');
    })
  })
})
