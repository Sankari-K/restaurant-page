import { createAboutContent } from "../about-content/about-content";
import { createMainFooter } from "../page-elements/main-footer";
import { createMainHeader } from "../page-elements/main-header";
import { createMainNav } from "../page-elements/main-nav";

const createAboutPage = (() => {
    const body = document.querySelector('div');
    body.append(
        createMainHeader(),
        createMainNav(),
        createAboutContent(),
        createMainFooter()
    )
    return body;
})

export {
    createAboutPage
};