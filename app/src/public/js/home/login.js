"use strict"


const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtm = document.querySelector("button");

loginBtm.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}

