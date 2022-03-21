function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    
    // description-container
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("main-div");

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    descriptionContainer.appendChild(descriptionText);

    // hours-container
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("main-div");

    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";

    const hoursText = document.createElement("p");
    hoursText.setAttribute('style', 'white-space: pre;');
    hoursText.textContent = "Monday-Friday: 8am - 8pm\r\nSaturday: 8am - 10pm\r\nSunday: 8am - 3pm";

    hoursContainer.appendChild(hoursHeader);
    hoursContainer.appendChild(hoursText);

    // location-container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("main-div");

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";

    const locationText = document.createElement("p");
    locationText.textContent = "Port level, near Dock 12.";

    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(locationText);

    // append to home
    home.appendChild(descriptionContainer);
    home.appendChild(hoursContainer);
    home.appendChild(locationContainer)

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;