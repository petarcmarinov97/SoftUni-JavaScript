function toggle() {
    // 1. Select elements
    let button=document.getElementsByClassName('button')[0];  //Връща колекция
    let textDiv=document.getElementById('extra');

    // 3. Show/Hide text and change button text
    // a) Change button text
    button.textContent=button.textContent==='More' ? 'Less' : 'More';
    // b) Show/Hide content
    textDiv.style.display=textDiv.style.display==='block' ? 'none' : 'block';
}

//.style.display -> това е стилизация която достъпваме директно с js