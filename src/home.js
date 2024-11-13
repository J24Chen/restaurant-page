
const content = document.querySelector(".content");


function createDescription() {
    

    let description = document.createElement("div");
    description.classList.add("description");

    let descriptionHeader = document.createElement("h2");
    descriptionHeader.textContent = "Description";
    description.appendChild(descriptionHeader);

    let p = document.createElement("p");
    p.textContent = "Found in the center of dirtmouth, Iselda's Wayfinder is a store owned by Iselda to sell mapping items and knacks to help you explore HallowNest! Founded by Iselda and Cornifer, the two work together to guide those who traverse inside inside the nest. "
    description.appendChild(p);
    content.appendChild(description);

}

function createHours() {
    let hours = document.createElement("div");
    hours.classList.add("hours");

    let hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";
    hours.appendChild(hoursHeader);

    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    for (let ele of daysOfWeek) {
        const p = document.createElement("p");
        p.classList.add("hourTime");    
        p.textContent = `${ele}: 9am-10pm`;
        hours.appendChild(p);
    }
    content.appendChild(hours);

}

function createLocation() {
    let location = document.createElement("div");
    location.classList.add("location");

    let locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    location.appendChild(locationHeader);
    
    let p = document.createElement("p");
    p.textContent = "Center of Dirtmouth, by the Tunnel."
    location.appendChild(p);
    content.appendChild(location);
    
}

export function createHome() {
    let h1 = document.createElement("h1");
    h1.textContent = "Iselda's Wayfinder";
    content.appendChild(h1);

    createDescription();
    createHours();
    createLocation();
}
