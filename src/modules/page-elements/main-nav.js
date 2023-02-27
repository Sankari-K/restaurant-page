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

    const createTabs = (name) => {
        const container = document.createElement('a');
        container.setAttribute('href', "");

        const nameTab = document.createElement('span');
        nameTab.textContent = name;

        container.appendChild(nameTab);
        return container;

    }
    
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'navigation');
    mainDiv.append(
        createTabs('Home'),
        createTabs('About'),
        createLogo(),
        createTabs('Menu'), 
        createTabs('Contact')
    )
    return mainDiv;
});

export {
    createMainNav
};