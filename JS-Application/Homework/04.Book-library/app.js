const url = 'http://localhost:3030/jsonstore/collections/books/';
const books = document.getElementById('books');
const cancelBtn = document.getElementById('cancelBtn');
const [createForm, editForm] = [document.querySelector('.createForm'), document.querySelector('.editForm')];
const changeForm = (x, y) => [x.style.display = 'block', y.style.display = 'none'];

(() => {
    document.getElementById('loadBooks').addEventListener('click', loadAllBooks);
    createForm.addEventListener('submit', createBook);
    editForm.addEventListener('submit', editBook);
    document.querySelector('tbody').addEventListener('click', action);
    cancelBtn.addEventListener('click', () => changeForm(createForm, editForm));
})();


async function loadAllBooks() {
    books.innerHTML = '';
    const data = await request(url, 'get');
    Object.entries(data).map(createRow).forEach(x => books.appendChild(x));
}

async function getBookById(id) {
    return request(url + id, 'get');
}

async function createBook(e) {
    
    try {
        const data = getData(e);
        await request(url, 'post', data);
        await loadAllBooks();
        e.target.reset();
    } catch (error) {
        console.error('Error!')
    }
}

async function editBook(e) {
    try {
        const data = getData(e);
        const { id } = e.target.dataset;
        await request(url + id, 'put', data);
        changeForm(createForm, editForm);
        loadAllBooks();
        e.target.reset();
    } catch (error) {
        console.error('Error!')
    }
}

async function deleteBook(id) {
    return request(url + id, 'delete');
}

function getData(e) {
    e.preventDefault();
    const data = [... new FormData(e.target)]
    .reduce((a, [k, v]) => ({ ...a, ...{ [k]: v } }), {});
    if (Object.values(data).some(x => x === '')) {
        throw new Error('All fields are required!');
    }
    return data;
}

async function action(e) {
    const { id } = e.target.dataset || {};
    if (e.target.className === 'edit') {
        changeForm(editForm, createForm);
        const book = await getBookById(id);
        editForm.setAttribute('data-id', id);
        editForm.querySelector('input[name="title"]').value = book.title;
        editForm.querySelector('input[name="author"]').value = book.author;
    } else if (e.target.className === 'delete') {
        changeForm(createForm, editForm);
        if (confirm('Are you sure you want to delete this record?')) {
            await deleteBook(id);
            loadAllBooks();
        }
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

function createRow([id, { author, title }]) {
    return create('tr', create('td', title), create('td', author), create('td',
        create('button', ['data-id', id], ['class', 'edit'], 'Edit'), create('button', ['data-id', id], ['class', 'delete'], 'Delete'))
    );
}