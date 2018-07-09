import Clock from './clock';
import 'normalize.css';
import '../css/body.css';


let clockElt = document.querySelector('.clock');
let clock = new Clock(clockElt);
clock.start();