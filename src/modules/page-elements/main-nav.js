const createMainNav = (() => {
    const createLogo = () => {
        const logo = document.createElement('span');

        link = document.createElement('a');
        logoImg = document.createElement('img');
        logoImg.src = '../../assets/logo.png';

        link.appendChild(logoImg);
        logo.appendChild(link);
        return logo;
    }

    const home = document.createElement('span');
    home.textContent = 'Home';

    const about = document.createElement('span');
    about.textContent = 'About';

    const menu = document.createElement('span');
    menu.textContent = 'Menu';

    const contact = document.createElement('span');
    contact.textContent = 'Contact';

    mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'navigation');
    maindiv.append(
        home,
        about,
        createLogo(),
        menu, 
        contact
    )
    return mainDiv;
});

export {
    createMainNav
};