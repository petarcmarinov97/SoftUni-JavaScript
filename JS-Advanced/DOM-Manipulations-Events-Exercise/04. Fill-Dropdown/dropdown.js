function addItem() {
   //const newItemText = document.getElementById(`newItemText`);
   //const newItemValue = document.getElementById(`newItemValue`);

   const option = document.createElement('option');
   option.textContent = document.getElementById(`newItemText`).value;
   option.value = document.getElementById(`newItemValue`).value;

   const menu = document.getElementById(`menu`);
   menu.appendChild(option);

   newItemText.value = '';
   newItemValue.value = '';

}