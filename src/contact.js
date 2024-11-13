const content = document.querySelector(".content");

export function createContact() {
    console.log("test");
    createCard("Iselda", "617-823-1239", "Iselda@dirtmouth.com");
    createCard("Cornifer", "617-813-1239", "Cornifer@dirtmouth.com");
} 

function createCard(name,phone,email) {
    const card = document.createElement("div");

    card.classList.add("card");
    let h3 = document.createElement("h3")
    let ph = document.createElement("p")
    let em = document.createElement("p")

    h3.textContent = name;
    ph.textContent = phone;
    em.textContent = email;

    card.appendChild(h3);
    card.appendChild(ph);
    card.appendChild(em);
    
    console.log(card);
    content.appendChild(card);
}