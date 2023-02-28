import { createSocials } from "../page-elements/socials";

const createAboutContent = (() => {
    const createAboutText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'about-text');

        const spanText = document.createElement('span');
        spanText.textContent = 'Who we are';

        const horizontalLine = document.createElement('hr');

        const paraOne = document.createElement('p');
        paraOne.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In eros nibh, finibus eu viverra id, mattis ac quam. 
        Maecenas sit amet rutrum leo. Cras condimentum efficitur 
        ligula, eu rutrum ipsum iaculis at. Phasellus lacus tortor, 
        hendrerit sodales magna vestibulum, interdum ultrices est.
        Proin quis mauris a orci blandit aliquet. Donec eu egestas 
        neque, at cursus mauris.`;

        const paraTwo = document.createElement('p');
        paraTwo.textContent = `Aliquam et nulla lectus. Orci varius natoque penatibus et 
        magnis dis parturient montes, nascetur ridiculus mus. 
        Curabitur nec augue ac odio scelerisque egestas eu at elit.
        Vestibulum dolor tellus, luctus eget condimentum sit amet, 
        tincidunt id libero. Donec vitae tempor ante. Interdum et 
        malesuada fames ac ante ipsum primis in faucibus.
        Aliquam et nulla lectus. Orci varius natoque penatibus et 
        magnis dis parturient montes, nascetur ridiculus mus.`;

        container.append(
            spanText,
            horizontalLine,
            paraOne,
            paraTwo
        );
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'about');

    container.append(
        createAboutText(),
        createSocials()
    )
    return container;
});

export {
    createAboutContent
};