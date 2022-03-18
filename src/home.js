function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    
    // description-container
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    descriptionContainer.appendChild(descriptionText);

    // hours-container
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");

    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";

    const hoursText = document.createElement("p");
    hoursText.setAttribute('style', 'white-space: pre;');
    hoursText.textContent = "Monday-Friday: 8am - 8pm\r\nSaturday: 8am - 10pm\r\nSunday: 8am - 3pm";

    hoursContainer.appendChild(hoursHeader);
    hoursContainer.appendChild(hoursText);

    // location-container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";

    const locationText = document.createElement("p");
    locationText.textContent = "1 Fake Street, FakeTown";

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