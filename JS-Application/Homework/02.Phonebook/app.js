const url = 'http://localhost:3030/jsonstore/phonebook/';
let phonebook = document.getElementById('phonebook');



function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadAllElements);
    document.getElementById('btnCreate').addEventListener('click', createEntry);
}

attachEvents();

async function loadAllElements() {
    phonebook.innerHTML = '';
    const data = await request(url, 'get');
    console.log(data);
    Object.values(data).map(createRow).forEach(x => phonebook.appendChild(x));
}

async function createEntry(){
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const data = await request(url, 'post', { person: person.value, phone: phone.value });
    phonebook.appendChild(createRow(data));
    [person, phone].map(x => x.value = '');
}

async function deleteEntry(parent, id) {
    if(confirm('Are you sure you want to delete this record?')) {
        await request(url + id, 'delete');
        parent.remove();
    }
}

async function request(url, type, body) {
    const option = {
        method: type,
        headers: { 'Content-Type': 'application/json' },
    };
    if (body) { option.body = JSON.stringify(body); }
    const response = await fetch(url, option);
    if (!response.ok) {
        const { message } = response.json();
        throw new Error(message);
    }
    return response.json();
}

function create(type, ...content) {
    const el = document.createElement(type);
    content.map(c => typeof c === 'string' ? el.textContent = c : Array.isArray(c) ? el.setAttribute(c[0], c[1]) : el.appendChild(c));
    return el;
}
function createRow({ person, phone, _id }) {
    const button = create('button', ['data-id', _id], 'Delete');
    const parent = create('ul', create('li', person), create('li', phone), create('li', button));
    console.log(parent);
    button.addEventListener('click', () => deleteEntry(parent, _id));
    return parent;
}