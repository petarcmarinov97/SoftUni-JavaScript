function search() {
   //1. Select Elements

   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll(`#towns li`));

   //2. Parse search text
   let searchText = searchElement.value;

   //Magic logic

   // b) clear every already matched Li's elements
   allLiElements.forEach(el => {
      el.style.fontWeight = `normal`;
      el.style.textDecoration = `none`;
   });
   // c) filter all Li's which contain the search text
   // d) bold and underline matching Li's
   let count=0;
   let targetList = allLiElements.forEach(x=>{
      if(x.textContent.toLowerCase().includes(searchText.toLowerCase())){
         x.style.fontWeight = `bold`;
         x.style.textDecoration = `underline`;
         count++
      }
   })
   // e) show matches result Li's
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${count} matches found`;
}