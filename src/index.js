import {cube} from "./math";

function component() {
    let element = document.createElement('div');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());