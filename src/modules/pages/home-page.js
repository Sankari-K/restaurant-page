import { createHomeContent } from '../home-content/home-content';
import { createMainFooter } from '../page-elements/main-footer';
import { createMainHeader } from '../page-elements/main-header';
import { createMainNav } from '../page-elements/main-nav';

const createHomePage = (() => {
    const body = document.querySelector('div');
    body.append(
        createMainHeader(),
        createMainNav(),
        createHomeContent(),
        createMainFooter()
    )
    return body;
});

export {
    createHomePage
};