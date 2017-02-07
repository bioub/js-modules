(function (global) {
  'use strict';

  // Random functions from MDN :
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  global.getRandom = function() {
    return Math.random();
  };

  global.getRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  global.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  global.getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

}(this));