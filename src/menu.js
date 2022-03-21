// createMenu, createMenuItem(name, description), export default loadMenu

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuItem1 = createMenuItem("White Kibble", 
        "Soy Protein and mushroom base with cheese powder.");
    const menuItem2 = createMenuItem("Red Kibble",
        "Deep-fried, heavily spiced red bean paste balls");

    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemName = document.createElement("h3");
    menuItemName.textContent = name;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = description;

    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;