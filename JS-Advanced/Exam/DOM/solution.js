window.addEventListener('load', solution);

function solution() {

   // 01. Add referentions to the elements which we will manipulate
   const fullNameInput = document.querySelector('#fname');
   const emailInput = document.querySelector('#email');
   const phoneNumberInput = document.querySelector('#phone');
   const addressCodeInput = document.querySelector('#address');
   const postalCodeInput = document.querySelector('#code');

   
   // const infoPReviewSection = document.querySelector('#infoPreview');
   let infoPreviewUl = document.querySelector('ul');

   const inputForm = document.querySelector('#block');
   const inputDivs = inputForm.querySelector('form');

   let addButton = document.querySelector('#submitBTN');


   addButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Read the input content and validate
      const fullName = fullNameInput.value;
      const email = emailInput.value;
      const phone = phoneNumberInput.value; 
      const address = addressCodeInput.value; 
      const postal = postalCodeInput.value; 

      console.log(fullName)
      console.log(email)
      console.log(phone)
      console.log(address)
      console.log(postal)

      // •	One can only submit information if the “Full Name” and “Email” input fields are not empty.  
      if (!fullName || !email) {
         console.log('The Full name and Email inputs must be fullfilled!');
         return;
      }
      
      // Create element
      let li1 = document.createElement('li');
      li1.textContent = `Full Name: ${fullName}`;
      infoPreviewUl.appendChild(li1);

      let li2 = document.createElement('li');
      li2.textContent = `Email: ${email}`;
      infoPreviewUl.appendChild(li2);

      let li3 = document.createElement('li');
      li3.textContent = `Phone Number: ${phone}`;
      infoPreviewUl.appendChild(li3);

      let li4 = document.createElement('li');
      li4.textContent = `Address: ${address}`;
      infoPreviewUl.appendChild(li4);

      let li5 = document.createElement('li');
      li5.textContent = `Postal Code: ${postal}`;
      infoPreviewUl.appendChild(li5);


      // Enable Edit and Continue btn
      let editBtn = document.querySelector('#editBTN');
      let continueBtn = document.querySelector('#continueBTN');

      editBtn.disabled = false;
      continueBtn.disabled = false;

      // Clear the inputs and disable buttons.
      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumberInput.value = '';
      addressCodeInput.value = '';
      postalCodeInput.value = '';
      addButton.disabled = true;

      
      editBtn.addEventListener('click', (e) => {
         e.preventDefault();

         fullNameInput.value = fullName;
         emailInput.value = email;
         phoneNumberInput.value = phone;
         addressCodeInput.value = address;
         postalCodeInput.value = postal;
         addButton.disabled = false;

         editBtn.disabled = true;
         continueBtn.disabled = true;

         infoPreviewUl.removeChild(li1);
         infoPreviewUl.removeChild(li2);
         infoPreviewUl.removeChild(li3);
         infoPreviewUl.removeChild(li4);
         infoPreviewUl.removeChild(li5);
      })

      continueBtn.addEventListener('click', (e) => {
         e.preventDefault();

         let h3 = document.createElement('h3');
         h3.textContent = 'Thank you for your reservation!';

         inputForm.innerHTML = '';

         inputForm.appendChild(h3);
      })
   })
}
