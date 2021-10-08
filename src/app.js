// module 방식
  // import * as math from "./math.js";
  // import { sum } from './math';

  // console.log(math.sum(1,2))

// IIFE 방식
  // console.log(math.sum(1,2))

// loader
import './app.css';
import nyancat from './nyancat.jpeg';

document.addEventListener('DOMContentLoaded', ()=> {
  document.body.innerHTML = `<img src="${nyancat}">`
})
