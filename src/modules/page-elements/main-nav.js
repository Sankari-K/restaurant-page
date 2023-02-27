import logoImgSrc from '../../assets/logo.png'

const createMainNav = (() => {
    const createLogo = () => {
        const logo = document.createElement('span');

        const link = document.createElement('a');
        link.setAttribute('href', '');
        const logoImg = document.createElement('img');
        logoImg.src = logoImgSrc;

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

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'navigation');
    mainDiv.append(
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