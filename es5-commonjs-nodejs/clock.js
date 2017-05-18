'use strict';

var blessed = require('blessed');
var moment = require('moment');
var getRandomIntInclusive = require('./random').getRandomIntInclusive;

var Clock = function () {};

Clock.prototype.update = function () {
  var r = getRandomIntInclusive(0, 255);
  var g = getRandomIntInclusive(0, 255);
  var b = getRandomIntInclusive(0, 255);

  var lines = process.stdout.getWindowSize()[1];

  var screen = blessed.screen();
  screen.title = 'Clock';

  var box = blessed.box({
    width: '100%',
    height: '100%',
    content:
      '\n'.repeat(Math.floor((lines - 1) / 2)) +
      '{center}' +
      moment().format('HH:mm:ss'),
    tags: true,
    style: {
      fg: '#' + (r).toString(16) + (g).toString(16) + (b).toString(16),
      bg: '#' + (255-r).toString(16) + (255-g).toString(16) + (255-b).toString(16),
    }
  });

  screen.append(box);
  screen.render();
};

Clock.prototype.start = function () {
  this.update();
  setInterval(this.update.bind(this), 1000);
};

module.exports = Clock;
