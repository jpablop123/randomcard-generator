/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generatesuit());
  document.querySelector(".card").innerHTML = generatenumber();
};
let generatenumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexnumber = Math.floor(Math.random() * numbers.length);

  return numbers[indexnumber];
};
let generatesuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];

  let indexsuit = Math.floor(Math.random() * suit.length);
  return suit[indexsuit];
};
