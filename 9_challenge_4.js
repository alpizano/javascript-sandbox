"use strict";

const txtElement = document.createElement("textarea");
txtElement.className = "form-control";

const btnElement = document.createElement("button");
btnElement.className = "btn btn-primary";
btnElement.innerHTML = "9_CHALLENGE_4";

//document.body.append(txtElement);
//document.body.append(btnElement);

document.querySelector(".xs-12").insertAdjacentElement("beforeend", txtElement);
document.querySelector(".xs-12").insertAdjacentElement("beforeend", btnElement);

const text = document.querySelector("textarea").value;
