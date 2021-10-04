import {html} from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../api/data.js';

const bookTemplate=(book)=>html `
                <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>
`;

const myBooksTemplate=(data)=>html `
<section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <ul class="my-books-list">
                    ${data.length==0
                    ? html `<p class="no-books">No books in database!</p>`
                    : data.map(bookTemplate)}
                    </ul>
            </section>
`;

export async function myBooksPage(ctx){
    const data=await getMyBooks();
    ctx.render(myBooksTemplate(data));
}