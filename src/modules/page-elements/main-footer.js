const createMainFooter = (() => {
    const githubLogo = document.createElement('img');
    githubLogo.src = '../../assets/github-icon.png';
    githubLogo.alt = 'github logo';

    const name = document.createElement('span');
    name.textContent = 'Sankari Karthik';

    const footer = document.createElement('footer');
    footer.append(
        githubLogo,
        name
    )
    return footer;
});

export {
    createMainFooter
};