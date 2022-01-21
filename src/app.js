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
  // if (name.value == "" || name.value == null) {
  //   error.classList.remove("d-none");
  //   error.classList.add("d-show");
  // } else {
  //   error.classList.remove("d-show");
  //   error.classList.add("d-none");
  // }
  if (name.classList.contains("valid")) {
    succs.classList.remove("d-none");
    succs.classList.add("d-show");
  }
});

//con foreach no

name.addEventListener("focusout", () => {
  // if (name.value == "" || name.value == null) {
  //   name.classList.remove("valid");
  //   name.classList.add("invalid");
  // } else {
  //   name.classList.remove("invalid");
  //   name.classList.add("valid");
  // }
  if (name.value.length > 0) {
    name.classList.remove("invalid");
    name.classList.add("valid");
  } else {
    name.classList.remove("valid");
    name.classList.add("invalid");
  }
});

//input funcion que pasa un tag y que le agregue y le quite

// surname.addEventListener("focusout", () => {
//   if (surname.value == "" || surname.value == null) {
//     surname.classList.add("invalid");
//   } else {
//     surname.classList.add("valid");
//   }
// });
/*
name.addEventListener("focusout", () => {
  if (name.value == "" || name.value == null) {
    name.classList.remove("valid");
    name.classList.add("invalid");
  } else {
    name.classList.remove("invalid");
    name.classList.add("valid");
  }
});*/

/* value.match(onlyletters)

   

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
    else{

    }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }
    else{

    }


  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
    else{

    }

  )}

  if (messages.length > 0) {
    errorElem.innerText = messages.join(", ");
  }

  else{ 

  }

  //alert si estan validar de alguna forma que los datos sean los que estas pidiendo
});




form.addEventListener("submit", e => 
e.preventDefault();

)}*/

//if()

//name.classList.contains("valid") &&
//surname.classList.contains("valid") &&

//else()
