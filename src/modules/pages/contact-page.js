import { createContactContent } from "../contact-content/contact-content";
import { createMainFooter } from "../page-elements/main-footer";
import { createMainHeader } from "../page-elements/main-header";
import { createMainNav } from "../page-elements/main-nav";

const createContactPage = (() => {
    const body = document.querySelector('div');
    body.append(
        createMainHeader(),
        createMainNav(),
        createContactContent(),
        createMainFooter()
    )
    return body;
})

export {
    createContactPage
};