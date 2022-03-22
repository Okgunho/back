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

    fetch("/login", {
        method: "POST",
        heafer: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    });
}

