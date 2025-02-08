/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //your code below

  //Variables
  let excusa = "";
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //Funcion de numero aletorio
  const numeroRandom = function(arr) {
    let num = Math.random();
    return Math.round(num * (arr.length - 1));
  };
  //creacion de excusa
  excusa =
    who[numeroRandom(who)] +
    " " +
    action[numeroRandom(action)] +
    " " +
    what[numeroRandom(what)] +
    " " +
    when[numeroRandom(when)];

  document.getElementById("excuse").innerHTML = excusa;
};
