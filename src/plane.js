'use strict'

class Plane {
  constructor() {
    this._location;
  }
  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  }
  take_off() {
    this._location.clearForTakeoff();
  }
}
