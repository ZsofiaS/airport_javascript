describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
  })

  it('shows planes in airport', function() {
    airport.land(plane)
    expect(airport.planes).toContain(plane)
  })

  describe('#land', function() {
    it('lands planes', function() {
      expect(airport.land(plane)).toEqual([plane])
    })
  })

  describe('#takeoff', function() {
    it('instructs planes to take off', function() {
      airport.land(plane)
      expect(airport.takeoff(plane)).toEqual(plane)
    })
  })
})
