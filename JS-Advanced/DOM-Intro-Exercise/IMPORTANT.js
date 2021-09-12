//Creating a new DOM element
let p=document.createElement("p");
let li=document.createElement("li");

//Create a copy/cloning DOM element
let li=document.getElementById("my-list");
let newLi=li.cloneNode(true);

//Deleting DOM Elements

    //HTML Code First
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>
    //JS Code Second for deleting
let parent=document.getElementById("div1");
let firstChild=document.getElementById("p1");
let secondChild=document.getElementById("p2");

firstChild.remove();
parent.removeChild(secondChild); //Deleting by parent element

//DOM Properties
    //textContent-прочита и изписва текста
    let text= Node.textContent
    Node.textContent=`New text for element.`

    //innerHTML-връща и изписва HTML на даден елемент
    let html=myElement.innerHTML;
    myElement.innerHTML=`New text for element.`;

    //value-взима и задава стойност
    let theValue=theFormField.value;
    theFormField.value=`New value`;

//HTML Attributes and Methods
    //getAttribute()-връща стойноста на атрибута за даден HTML елемент
    
        //HTML First
    <input type="text" name="username"/>
    <input type="password" name="password"/>

        //JS Second
        const inputEle=document.getElementById(`input`)[0];
        inputEle.getAttribute(`type`); //text
        inputEle.getAttribute(`name`); //username

    //setAttribute()-Задава стойност на атрибут
    <input type="text" name="username"/>
    <input type="password" />
        //JS Code
    const inputPassEle = document.getElementsByTagName('input')[1];
    inputPassEle.setAttribute('name', 'password'); 
        //Резултати:
        <input type="text" name="username"/>
        <input type="password" name="password"/>

    //removeAttribute()-премахва Атрибут с определено име от HTML елемент
    <input type="text" name="username" placeholder="Username..."/>
    <input type="password" name="password" placeholder="Password..."/>

        //JS Code
        const inputPassEle = document.getElementsByTagName('input')[1];
        inputPassEle.removeAttribute('placeholder');

        //Резултати
        <input type="text" name="username" placeholder="Username..."/>
        <input type="password" name="password"/>

    //hasAttribute()-Метод който връща true ако атрибута съществува
    <input type="text" name="username" placeholder="Username..."/>
    <input type="password" name="password" id="password"/>
    
        //JS Code
        const passwordElement = document.getElementById(password');
        passwordElement.hasAttribute('name'); // true 
        passwordElement.hasAttribute('placeholder'); // false







