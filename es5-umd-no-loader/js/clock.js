(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('moment'), require('./random'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['moment', './random'], function (moment, random) {
      return factory(moment, random);
    });
  } else {
    // Global Variables
    root.Clock = factory(root.moment, root.random);
  }
}(this, function (moment, random) {
  'use strict';

  var getRandomIntInclusive = random.getRandomIntInclusive;

  var Clock = function(parentElt) {
    this.parentElt = parentElt;
  };

  Clock.prototype.update = function() {
    var r = getRandomIntInclusive(0, 255);
    var g = getRandomIntInclusive(0, 255);
    var b = getRandomIntInclusive(0, 255);
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    document.body.style.color = 'rgb('+(255-r)+', '+(255-g)+', '+(255-b)+')';
    this.parentElt.innerHTML = moment().format('HH:mm:ss');
  };

  Clock.prototype.start = function() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  };

  return Clock;
}));
