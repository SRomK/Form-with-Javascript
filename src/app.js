/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
//write your code here

const form = document.querySelector(".form");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const repPass = document.querySelector(".repPass");
const errorElem = document.querySelector(".error");

//objeto

form.addEventListener("submit", e => {
  //donde van todos los condicionales
  let messages = [];
  if (name.value == "" || name.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElem.innerText = messages.join(", ");
  }
});
