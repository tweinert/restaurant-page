// createMenu, createMenuItem(name, description), export default loadMenu

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuItem1 = createMenuItem("Pizza", "Meat, Cheese, Probably some veg.");

    menu.appendChild(menuItem1);

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