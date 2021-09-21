import {
   render
} from '../node_modules/lit-html/lit-html.js';

import {
   allStudentsTemplate
} from './templates/template.js'

function solve() {

   //Селектиране на елементи и създаване на масив students за пазене на данни;
   let table = document.querySelector('tbody')
   let students = [];
   //Заявка и рендериране
   async function loadOptions() {
      let studentsResponse = await fetch('http://localhost:3030/jsonstore/advanced/table')
      let studentsObj = await studentsResponse.json();
      students = Object.values(studentsObj);
      render(allStudentsTemplate(students), table)
   }
   loadOptions();

   //Селектиране на бутона и задаване на евент клик върху него
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //1.Селектираме елементите
      let searchElement = document.getElementById('searchField');
      let searchText = searchElement.value;
      let rowElements = Array.from(document.querySelectorAll(`tbody tr`));
      //a) Зачистваме класовете на елементите от предишно търсене
      rowElements.forEach(el => {
         //Добавяме клас като е със стойност празен стринг
         el.className = '';
      });
      //2. Намираме съвпадения
      //2.1 Модифицираме съвпаденията със определения клас
      let filteredRows = rowElements.filter(el => {
         let values = Array.from(el.children);
         if (values.some(x => x.textContent.includes(searchText))) {
            //Вече задаваме класа ни да се казва class='select'
            el.className = 'select';
         }
      })
      //3. Зачистваме полето за търсене на съвпадения
      searchElement.value = '';
   }
}


solve();