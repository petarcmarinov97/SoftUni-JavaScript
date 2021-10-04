import {html} from '../../node_modules/lit-html/lit-html.js';
import {getAllBooks} from '../api/data.js';

const bookTemplate = (book) => html `
    <li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>Type: ${book.type}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/details/${book._id}">Details</a>
                </li>

`;

const dashboardTemplate = (data) => html `
    <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
            ${data.length==0
                ? html`<p class="no-books">No books in database!</p>`
                : data.map(bookTemplate)}
                </ul>
            </section>
`

export async function dashboardPage(ctx) {
    const data = await getAllBooks();

    ctx.render(dashboardTemplate(data));
}