import { createSocials } from "../page-elements/socials";

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