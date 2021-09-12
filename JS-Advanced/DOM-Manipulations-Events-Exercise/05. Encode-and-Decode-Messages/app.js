function encodeAndDecodeMessages() {
    const [sendButton, recieveButton] = Array.from(document.querySelectorAll('button'));
    const [sendArea, recieveArea] = Array.from(document.querySelectorAll('textarea'))

    sendButton.addEventListener('click', send);
    recieveButton.addEventListener('click', recieve);

    function send() {
        recieveArea.value = sendArea.value.split('')
            .map(x => x.charCodeAt(0) + 1)
            .map(x => String.fromCharCode(x))
            .join('');
        sendArea.value = '';
    }

    function recieve() {
        recieveArea.value = recieveArea.value.split('')
            .map(x => x.charCodeAt(0) - 1)
            .map(x => String.fromCharCode(x))
            .join('');
    }
}