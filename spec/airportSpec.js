'use strict';

describe('Airport', function() {
  var airport;
  var plane;

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
})
