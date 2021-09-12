function focused() {
    //select all input fields
    Array.from(document.querySelectorAll(`input`)).forEach(i => {
        i.addEventListener(`focus`, onFocus);
        i.addEventListener(`blur`, onBlur)
    });
    //add listener for focus event
    //onFocus -> select input parent -> apply class "focused"
    //add listener for blur event
    //onBlur -> select input parent - remove class "focused


    function onFocus(ev) {
        //onFocus -> select input parent -> apply class "focused"
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        //onBlur -> select input parent - remove class "focused
        ev.target.parentNode.className = '';
    }
}