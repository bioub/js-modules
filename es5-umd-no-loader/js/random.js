(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {
      return factory();
    });
  } else {
    // Global Variables
    root.random = factory();
  }
}(this, function () {
  'use strict';

  // Random functions from MDN :
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  return {
    getRandom: function () {
      return Math.random();
    },
    getRandomArbitrary: function (min, max) {
      return Math.random() * (max - min) + min;
    },
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    getRandomIntInclusive: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };
}));
