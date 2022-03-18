import loadHome from "./home";

function createHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Restaurant Name";

    header.appendChild(restaurantName);
    
    return header;
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