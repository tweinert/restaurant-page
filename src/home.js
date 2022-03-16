// createHome, export default loadHome (maybe createParagraph(text))
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    // heading-container
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const nameHeading = document.createElement("h1");
    nameHeading.textContent = "Restaurant Name";

    headingContainer.appendChild(nameHeading);

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
    home.appendChild(headingContainer);
    home.appendChild(descriptionContainer);
    home.appendChild(hoursContainer);
    home.appendChild(locationContainer)

    return home;
}

function loadHome() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createHome());
}

export default loadHome;