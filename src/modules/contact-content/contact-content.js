import { createSocials } from "../page-elements/socials";


const createContactContent = (() => {
    const createInput = (forInfo, type) => {
        const container = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', forInfo);
        label.textContent = forInfo[0].toUpperCase() + forInfo.slice(1);
        const required = document.createElement('span');
        required.setAttribute('class', 'required');
        required.textContent = '*';
        label.appendChild(required);

        const input = document.createElement('input');
        input.type = type;
        input.id = forInfo;
        input.required = true;

        container.append(
            label,
            input
        );
        return container;
    }

    const createForm = () => {
        const form = document.createElement('form');
        form.name = "form";
        form.action = "./index.html";

        const textarea = document.createElement('div');

        const label = document.createElement('label');
        label.setAttribute('for', 'message');
        label.textContent = 'Message';

        const required = document.createElement('span');
        required.setAttribute('class', 'required');
        required.textContent = '*';
        label.appendChild(required);

        const inputField = document.createElement('textarea');
        inputField.name = 'message';
        inputField.id = 'message';
        inputField.minLength = '5';
        inputField.required = true;

        textarea.append(
            label,
            inputField
        );

        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';

        form.append(
            createInput('name', 'text'),
            createInput('email', 'email'),
            textarea,
            button
        );
        return form;
    }

    const createContactText = () => {
        const container = document.createElement('div');
        container.setAttribute('class', 'contact-text');

        const heading = document.createElement('span');
        heading.textContent = 'Contact us!';

        const horizontalLine = document.createElement('hr');
        const subheading = document.createElement('p');
        subheading.textContent = 'Please fill this form and we\'ll get in touch with you soon.';

        container.append(
            heading,
            horizontalLine,
            subheading,
            createForm()
        );
        return container;
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'contact');
    container.append(
        createContactText(),
        createSocials()
    );
    return container;
});

export {
    createContactContent
};