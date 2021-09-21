import { render, html } from './node_modules/lit-html/lit-html.js';
import {contacts} from './contacts.js';
import listCards from './templates/listCards.js'

let rootElement = document.querySelector('body');
rootElement.addEventListener('click',onClick)
render(listCards(contacts),rootElement);

function onClick(e){
    // if(e.target.classList.contains('detailsBtn')){
    // }
    let parent=e.target.parentNode;
    let details=parent.querySelector('.details');
    details.style.display='block';
}






