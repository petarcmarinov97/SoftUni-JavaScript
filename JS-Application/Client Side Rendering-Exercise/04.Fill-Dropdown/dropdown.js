import {
    render
} from '../node_modules/lit-html/lit-html.js';
import {
    AllOptionsTemplate
} from './templates/optionTemplates.js';


let selectMenu = document.getElementById('menu');


//Селектиране на формата и закачане на евент
let addOptionForm = document.getElementById('add-option-form');
addOptionForm.addEventListener('submit', addItem);

//Селектиране на бутона за събмит и деактивиране на клика
let submitButton = document.getElementById('submit');
submitButton.disabled = true;

loadOptions();

let options = []


//Функции и заявки

//Заявка и рендериране
async function loadOptions() {
    let optionsResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
    let optionsObj = await optionsResponse.json();
    options = Object.values(optionsObj);

    render(AllOptionsTemplate(options), selectMenu);
    submitButton.disabled=false;
}

//Заявка и изпълнения на евент при клик на бутона събмит
async function addItem(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let newOption = {
        text: formData.get('text')
    }

    //Заявка за създаване
    let createResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'Post',
        body: JSON.stringify(newOption)
    })

    //Проверка ако е окей заявката и пазене на данните в дома
    if (createResponse.ok) {
        let createdOption=await createResponse.json();
        options.push(createdOption);
        render(AllOptionsTemplate(options),selectMenu);
    }

    //Селектиране и зачистване на полето след изпълнението на заявката
    const pole=document.getElementById('itemText');
    pole.value='';
}