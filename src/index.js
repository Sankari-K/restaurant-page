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

    const home = document.getElementById('Home');
    home.classList.add('focus');
}

function showAbout() {
    clearDOM();
    createAboutPage();

    const about = document.getElementById('About');
    about.classList.add('focus');
}

function showMenu() {
    clearDOM();
    createMenuPage();

    const menu = document.getElementById('Menu');
    menu.classList.add('focus');
}

function showContact() {
    clearDOM();
    createContactPage();

    const contact = document.getElementById('Contact');
    contact.classList.add('focus');
}

showHome();
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target == 'Home') showHome();
    else if (target == 'About') showAbout();
    else if (target == 'Menu') showMenu()
    else if (target == 'Contact') showContact();
});
