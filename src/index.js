import { createHomePage } from "./modules/pages/home-page";
import { createAboutPage } from "./modules/pages/about-page";
import { createMenuPage } from "./modules/pages/menu-page";
import { createContactPage } from "./modules/pages/contact-page";
import './style.css';

function clearDOM() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function showHome() {
    clearDOM();
    createHomePage();
}

function showAbout() {
    clearDOM();
    createAboutPage();
}

function showMenu() {
    clearDOM();
    createMenuPage();
}

function showContact() {
    clearDOM();
    createContactPage();
}

showHome();
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target == 'Home') showHome();
    else if (target == 'About') showAbout();
    else if (target == 'Menu') showMenu()
    else if (target == 'Contact') showContact();
});
