const createHomeContent = (() => {
    const content = document.createElement('div');
    content.setAttribute('class', 'slider');

    const restoName = document.createElement('p');
    restoName.textContent = 'Crust & Co.';

    const catchPhrase = document.createElement('span');
    catchPhrase.textContent = 'Crust me, our pizza is worth every slice!';

    content.append(
        restoName,
        catchPhrase
    )
    return content;
});

export {
    createHomeContent
};