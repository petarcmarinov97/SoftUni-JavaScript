function solve() {
  //1. Select elements
  let textAreaElement=document.getElementById('input');

  //2. Extract text from text area
  let text=textAreaElement.value;

  //3. Split text by `.` to get sentences
  let sentences=text.split('.').filter(x=>x!=='').map(x=>x + '.');

  //4. Group sentences by 3 in paragraphs
  let paragraphRoof=Math.ceil(sentences.length/3);

  //5. Insert paragraphs into DOM
  let resultDiv=document.getElementById('output');
  for (let index = 0; index < paragraphRoof; index++) {
    resultDiv.innerHTML+=`<p>${sentences.splice(0,3).join(``)}</p>`
  }
}