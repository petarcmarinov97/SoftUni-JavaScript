function solution() {
    const btnAddGift = document.querySelector('div > section:nth-child(1) > div > button');
    const ulSent = document.querySelector('.card:nth-child(3) > ul');
    const ulDiscard = document.querySelector('.card:nth-child(4) > ul');
    btnAddGift.addEventListener('click', function (e) {
        e.preventDefault();

        let ulContainer = document.querySelector('div > section:nth-child(2) > ul');
        ulContainer.parentNode.addEventListener('click', eventHandler);
        let liItem = document.createElement('li');
        giftInput = document.querySelector('input[type="text"][placeholder="Gift name"]');

        liItem.textContent = giftInput.value;
        liItem.classList.add('gift');

        //Create buttons
        let sendBtn = document.createElement("BUTTON");
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement("BUTTON");
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';

        //Appending
        liItem.appendChild(sendBtn);
        liItem.appendChild(discardBtn);
        ulContainer.appendChild(liItem)

        Array.from(ulContainer.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => ulContainer.appendChild(li));
        //Clear the field
        giftInput.value = ''

    });

    function eventHandler(e) {
        const currentItem = e.target.parentNode;
        if (e.target.id === "sendButton") {
            const text=currentItem.textContent.replace('SendDiscard', '');
            const liEl=document.createElement('li');
            liEl.textContent=text
            ulSent.appendChild(liEl);
            currentItem.remove();
            
        }
        if (e.target.id === "discardButton") {
            const text=currentItem.textContent.replace('SendDiscard', '');
            const liEl=document.createElement('li');
            liEl.textContent=text
            ulDiscard.appendChild(liEl);
            currentItem.remove();
        }
    }
}








// sendBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     let ulContainer = document.querySelector('div > section:nth-child(3) > ul');
//     let liItem = document.createElement('li');

//     liItem.textContent = e.target.parentNode.textContent.replace('SendDiscard', '');
//     e.target.parentNode.remove();
//     ulContainer.appendChild(liItem)
// })

// discardBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     let ulContainer = document.querySelector('div > section:nth-child(4) > ul');
//     let liItem = document.createElement('li');

//     liItem.textContent = e.target.parentNode.textContent.replace('SendDiscard', '');
//     e.target.parentNode.remove();
//     ulContainer.appendChild(liItem)
// })