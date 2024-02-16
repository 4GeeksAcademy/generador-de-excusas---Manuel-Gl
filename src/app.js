/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abu", "La tortuga", "Un pokemon"];
let action = ["se comio", "se orino", "se aplasto", "se rompio"];
let what = ["mis deberes", "mis llaves", "la tarjeta"];
let when = [
  "despues de las clases",
  "en el momento",
  "que estaba terminando",
  "cuando me estaba duchando",
  "...no te quiero mentir no me gustas"
];

function seleccionAlAzar(array) {
  return array[Math.floor(Math.random() * array.length)];
}
window.onload = function() {
  //write your code here

  let miCaja = document.getElementById("miCaja");
  miCaja.textContent =
    seleccionAlAzar(who) +
    " " +
    seleccionAlAzar(action) +
    " " +
    seleccionAlAzar(what) +
    " " +
    seleccionAlAzar(when);

  console.log(miCaja);
  //let elemento = document.getElementById("exusa");

  //function onLoad(){
  //  var excusa = document.getElementById("excusa");
  //excusa.innerHTML = seleccionAlAzar(quien, suceso, que, cuando);
  //}
  //window.onload = onLoad;
};
