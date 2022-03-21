// createContact, export default loadContact

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("main-div");

    const contactHeader = document.createElement("h3");
    contactHeader.textContent = "Contact Us";

    const contactText = document.createElement("p");
    contactText.textContent = "8200 0000";

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactText);

    contact.appendChild(contactContainer);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;