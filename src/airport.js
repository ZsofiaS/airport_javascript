class Airport {
  constructor() {
    this._all_planes = [];
  }
  planes() {
    return this._all_planes;
  }
  clearForLanding(plane) {
    return this._all_planes.push(plane);
  }
  clearForTakeoff(plane) {
    if (this.isStormy()) {
      throw new Error('cannot take off');
    }
    this._all_planes = [];
  }
  isStormy() {
    return false;
  }
}
