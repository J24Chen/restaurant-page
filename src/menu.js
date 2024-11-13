const content = document.querySelector(".content");

import marker from "./images/Gleaming_Marker.png";
import tram from "./images/Map_Pin_Tram.png";
import quill from "./images/Quill.png";
import compass from "./images/Wayward_Compass.png";
import geoImg from "./images/Geo.png";

export function createMenu() {

    let h1 = document.createElement('h1');
    h1.textContent = "Menu"

    const menuList = document.createElement("div");
    menuList.classList.add("menuGrid");
    let itemList = ["Map Marker", "Tram Pin", "Quill", "Wayward Compass"];
    let imgList = [marker,tram,quill,compass];
    let priceList = [100,150,220,120]

    for (let i = 0; i < (itemList.length); i++) {
        let item = createItem(itemList[i],imgList[i],priceList[i]);
        menuList.appendChild(item);
    }

    content.appendChild(h1);
    content.appendChild(menuList);

}



function createItem(name,img,price) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    let h4 = document.createElement("h4");
    h4.textContent = name;

    let itemImg = document.createElement("img");
    itemImg.src = img;
    itemImg.classList.add("item-img");

    itemContainer.appendChild(h4);
    itemContainer.appendChild(itemImg);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");

    let geo = document.createElement("img");
    geo.src = geoImg;

    let p = document.createElement("p");
    p.textContent = price;

    priceDiv.appendChild(geo);
    priceDiv.appendChild(p);
    itemContainer.appendChild(priceDiv);

    return itemContainer;

}

