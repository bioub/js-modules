// moment doesn't export as ES6 (ESM) neither cherry-picking
// import moment from 'moment';

// cherry picking
// import format from 'date-fns/esm/format';

import { format } from 'date-fns/esm';
import { getRandomIntInclusive } from './random';
import css from '../css/clock.css';

export default class Clock {
  constructor(parentElt) {
    this.parentElt = parentElt;
    this.parentElt.className = css.clock;
  }

  update() {
    let r = getRandomIntInclusive(0, 255);
    let g = getRandomIntInclusive(0, 255);
    let b = getRandomIntInclusive(0, 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    // this.parentElt.innerHTML = moment().format('HH:mm:ss');
    this.parentElt.innerHTML = format(new Date(), 'HH:mm:ss');
  }

  start() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }
}

