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

    // hours-container

    // location-container

    home.appendChild(headingContainer);

    return home;
}

function loadHome() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createHome());
}

export default loadHome;