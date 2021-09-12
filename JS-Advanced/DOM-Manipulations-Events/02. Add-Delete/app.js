function addItem() {
    let newItemElement=document.getElementById('newItemText');
    let itemsElement=document.getElementById('items');

    let liItemElement=document.createElement('li');
    liItemElement.textContent=newItemElement.value;

    //Add delete button
    let deleteButton=document.createElement(`a`);
    deleteButton.setAttribute('href','#');
    deleteButton.textContent='[Delete]';

    //Atach event on delete button
    deleteButton.addEventListener(`click`,(e)=>{
        e.currentTarget.parentNode.remove();
    });

    liItemElement.appendChild(deleteButton);
    itemsElement.appendChild(liItemElement);

    newItemElement.value='';

}