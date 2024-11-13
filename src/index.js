console.log("よろしく");


import "./style.css";

import { createHome } from "./home.js";
import {createMenu } from "./menu.js";
import { createContact } from "./contact.js";

createHome();

const content = document.querySelector(".content")
const buttons = document.querySelectorAll("button");

let focusIndex = 0;
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", () => {
        changeContent(i);
    })
    
    
}

// 0 = home, 1 = menu, 2 = contact
function changeContent(input){

    content.textContent = "";
    buttons[focusIndex].classList.remove("focused");
    buttons[input].classList.add("focused");
    focusIndex = input;

    switch(input) {
        case 0: 
            createHome();      
            break;  
        case 1: 
            createMenu();    
            break;
        case 2: 
            createContact();
            break;
    }
}

/* 
TODO:

- Create the other sections and configure tab switching


*/