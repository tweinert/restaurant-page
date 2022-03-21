import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Dock 12 Bar";

    header.appendChild(restaurantName);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button != this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    
    loadHome();
}

export default initializeWebsite;