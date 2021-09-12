function create(words) {
   const div=document.getElementById(`content`);

   for (const word of words) {
      const newDiv=document.createElement(`div`);
      const newP=document.createElement(`p`);
      newP.textContent=word;
      newP.style.display="none"
      newDiv.appendChild(newP);
      div.appendChild(newDiv); 
      newDiv.addEventListener(`click`,function(e){
         newP.style.display='block'
      })
   }
}