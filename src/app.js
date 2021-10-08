/* webpack 전 방식 */
// module 방식
// import * as math from "./math.js";
// import { sum } from './math';

// console.log(math.sum(1,2))

// IIFE 방식
// console.log(math.sum(1,2))

/* loader */
// import "./app.css";
// import nyancat from "./nyancat.jpeg";

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.innerHTML = `<img src="${nyancat}">`;
// });

// console.log(process.env.NODE_ENV);
// console.log(TWO);
// console.log(STRING);
// console.log(api.domain);

/* api 적용 */
import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  document.body.innerHTML = (res.data || []).map((user) => {
    return `<div>${user.id}: ${user.name}</div>`;
  }).join("");
});
