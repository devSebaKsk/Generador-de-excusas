/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //your code below
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
  let num = Math.random();
  let excusa = "";
  excusa =
    who[Math.round(num * (who.length - 1))] +
    " " +
    action[Math.round(num * (action.length - 1))] +
    " " +
    what[Math.round(num * (what.length - 1))] +
    " " +
    when[Math.round(num * (when.length - 1))];
  document.getElementById("excuse").innerHTML = excusa;
};
