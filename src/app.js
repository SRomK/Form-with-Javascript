/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
//write your code here

const form = document.querySelector("#formulario");
const error = document.querySelector("#error");
const succs = document.querySelector("#success");
const input = document.querySelectorAll("input");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repPass = document.querySelector("#repPass");
const allElements = [name, surname, age, email, password, repPass];

//objeto

form.addEventListener("submit", e => {
  e.preventDefault();
  if (
    name.classList.contains("valid") &&
    surname.classList.contains("valid") &&
    age.classList.contains("valid") &&
    email.classList.contains("valid") &&
    password.classList.contains("valid") &&
    repPass.classList.contains("valid")
  ) {
    console.log("OK");
    alert("Your form has been sent.");
  } else {
    console.log("NOT OK");
    alert("Your form is incomplete.");
  }
});

name.addEventListener("focusout", () => {
  if (name.value.length > 0) {
    name.classList.remove("invalid");
    name.classList.add("valid");
  } else {
    name.classList.remove("valid");
    name.classList.add("invalid");
  }
});

surname.addEventListener("focusout", () => {
  if (surname.value.length > 0) {
    surname.classList.remove("invalid");
    surname.classList.add("valid");
  } else {
    surname.classList.remove("valid");
    surname.classList.add("invalid");
  }
});

age.addEventListener("focusout", () => {
  if (age.value.length > 0) {
    age.classList.remove("invalid");
    age.classList.add("valid");
  } else {
    age.classList.remove("valid");
    age.classList.add("invalid");
  }
});

email.addEventListener("focusout", () => {
  if (email.value.length > 0) {
    email.classList.remove("invalid");
    email.classList.add("valid");
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    alert("You have entered an invalid email address!");
  }
});

password.addEventListener("focusout", () => {
  if (password.value !== "password" && password.value.length > 0) {
    password.classList.remove("invalid");
    password.classList.add("valid");
  } else if (password.value == "password") {
    alert("Password cannot be password");
    password.classList.remove("valid");
    password.classList.add("invalid");
  } else {
    password.classList.remove("valid");
    password.classList.add("invalid");
  }
});

repPass.addEventListener("focusout", () => {
  if (repPass.value.length > 0) {
    repPass.classList.add("valid");
    repPass.classList.replace("invalid", "valid");
  } else {
    repPass.classList.add("invalid");
    repPass.classList.replace("valid", "invalid");
  }
});

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   allElements.forEach(element => {
//     if (element.classList.contains("valid")) {
//     } else {
//       alert("Your form is incomplete.");
//     }
//   });

/*
  // HAGO UN 5IF && Y ELSE

  //name.classList.contains("valid") &&
  //surname.classList.contains("valid") &&

  //else()

  ver si guardo lo de abajo o no

  if (name.value == "" || name.value == null) {
    error.classList.remove("d-none");
    error.classList.add("d-show");
  } else {
    error.classList.remove("d-show");
    error.classList.add("d-none");
  }

  if (name.classList.contains("valid")) {
    succs.classList.remove("dnone");
    succs.classList.add("dshow");
  }*/
