class Weather {
  constructor() {
    this._CHANCE = 0.5;
  }
  isStormy() {
    return (Math.random() > this._CHANCE);
  }
}
