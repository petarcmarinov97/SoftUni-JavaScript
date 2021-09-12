function addItem() {
    let inputElement=document.getElementById('newItemText');
    let output=document.getElementById(`items`);
    let liElement=document.createElement(`li`)
    liElement.textContent=inputElement.value;

    let deleteButton=document.createElement('a');
    deleteButton.setAttribute(`href`,`#`);
    deleteButton.textContent=`[Delete]`

    

    deleteButton.addEventListener(`click`,(e)=>{
        e.currentTarget.parentNode.remove()
    })

    if(inputElement.value!==``){
    liElement.appendChild(deleteButton)
    output.appendChild(liElement)}
    else return;

    inputElement.value=``;
}