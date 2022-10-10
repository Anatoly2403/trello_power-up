export class Timer {
  constructor() {
    this._hour = '00';
    this._min = '00';
    this._sec = '00';
    this._intervalId = null;
    this._interval = 1000;
  }

  get time() {
    return this._time;
  }



  start() {
    this._intervalId = setInterval(() => {

    }, this._interval);
  }

}