import instaPicSrc from '../../assets/icons/instagram-icon.png'
import fbPicSrc from '../../assets/icons/facebook-icon.png'
import twtPicSrc from '../../assets/icons/twitter-icon.png'

const createMenuContent = (() => {
    const createMenuItem = (itemName) => {
        const container = document.createElement('div');

        const name = document.createElement('span');
        name.textContent = itemName;

        const description = document.createElement('p');
        description.textContent = `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Aenean aliquam aliquet 
        facilisis.`;

        container.append(
            name,
            description
        )
        return container;
    }

    const createMenuText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'menu-text');

        const menu = document.createElement('span');
        menu.textContent = 'Menu';

        const horizontalLine = document.createElement('hr');

        container.append(
            menu,
            horizontalLine,
            createMenuItem('Margherita  $5'),
            createMenuItem('Cheese n Corn $6'),
            createMenuItem('Farmhouse $6'),
            createMenuItem('Fresh Veggie $7'),
            createMenuItem('Cheese n Tomato $6'),
            createMenuItem('Garlic bread $4')
        );
        return container;
    }

    const createSocials = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'socials');

        const instaLink = document.createElement('a');
        const instaPic = document.createElement('img');
        instaPic.src = instaPicSrc;
        instaPic.alt = 'Instagram logo';
        instaLink.appendChild(instaPic);

        const fbLink = document.createElement('a');
        const fbPic = document.createElement('img');
        fbPic.src = fbPicSrc;
        fbPic.alt = 'Facebook logo';
        fbLink.appendChild(fbPic);

        const twtLink = document.createElement('a');
        const twtPic = document.createElement('img');
        twtPic.src = twtPicSrc;
        twtPic.alt = 'Twitter logo';
        twtLink.appendChild(twtPic);


        container.append(
            instaLink,
            fbLink,
            twtLink
        )
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'menu');

    container.append(
        createMenuText(),
        createSocials()
    )
    return container;
});

export {
    createMenuContent
};