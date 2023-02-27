import { createMenuContent } from "../menu-content/menu-content";
import { createMainFooter } from "../page-elements/main-footer";
import { createMainHeader } from "../page-elements/main-header";
import { createMainNav } from "../page-elements/main-nav";

const createMenuPage = (() => {
    const body = document.querySelector('div');
    body.append(
        createMainHeader(),
        createMainNav(),
        createMenuContent(),
        createMainFooter()
    )
    return body;
})

export {
    createMenuPage
}