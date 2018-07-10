import 'normalize.css';
import '../css/body.css';
import Clock from './clock';

let clockElt = document.querySelector('.clock');
let clock = new Clock(clockElt);
clock.start();