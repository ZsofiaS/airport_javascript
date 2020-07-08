class Airport {
  constructor(weather) {
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
    this._all_planes = [];
  }
  planes() {
    return this._all_planes;
  }
  clearForLanding(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot land');
    }
    this._all_planes.push(plane);
  }
  clearForTakeoff(plane) {
    if (this._weather.isStormy()) {
      throw new Error('cannot take off');
    }
    this._all_planes = [];
  }
}
