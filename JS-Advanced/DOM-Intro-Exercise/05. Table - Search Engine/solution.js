function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //1.Select Elements
      let searchElement=document.getElementById('searchField');
      let searchText=searchElement.value;
      let rowElements=Array.from(document.querySelectorAll(`tbody tr`));
         //a) Clear styles from previous search
      rowElements.forEach(el=>{
         //Добавяме клас като е със стойност празен стринг
         el.className='';
      });
      //2. Find matching row elements text
         //2.1 Modify style for matching rows
      let filteredRows=rowElements.filter(el=>{
         let values=Array.from(el.children);
         if(values.some(x=>x.textContent.includes(searchText))){
            //Вече задаваме класа ни да се казва class='select'
            el.className='select';
         }
      })
      //3. Clear txt field
      searchElement.value='';
   }
}