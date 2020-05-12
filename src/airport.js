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
}
