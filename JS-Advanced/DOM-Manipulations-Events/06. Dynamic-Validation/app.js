function validate() {
    let regex = /[a-z]+@[a-z]+.[a-z]+/g;

    let inputField = document.querySelector('#email');
    let inputValue = inputField.value;

    inputField.addEventListener('change', checkForError);

    function checkForError(event) {
        if (regex.test(event.target.value)) {
            event.target.classList.remove('error');
            return;
        } else {
            event.target.classList.add('error');
        }
    }
}