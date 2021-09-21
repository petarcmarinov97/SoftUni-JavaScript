import {
    render
} from "../node_modules/lit-html/lit-html.js";
import {
    allTownsTemplate
} from "./templates/townTemplate.js";

let form = document.getElementById('towns-form');
form.addEventListener('submit', displayTowns);

let rootDiv = document.getElementById('root');

function displayTowns(e) {
    e.preventDefault();
    let form = e.target;
    let inputEl = document.querySelector('input');
    if (inputEl.value != '') {
        let formData = new FormData(form);
        let towns = formData.get('towns').split(', ');
        render(allTownsTemplate(towns), rootDiv);
    }
}