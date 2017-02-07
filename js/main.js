(function(global, Clock) {
  'use strict';

  var clockElt = document.querySelector('.clock');
  var clock = new Clock(clockElt);
  clock.start();

}(this, Clock));