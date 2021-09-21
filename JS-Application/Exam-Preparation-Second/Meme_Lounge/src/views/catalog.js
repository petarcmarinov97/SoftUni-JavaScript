import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllMemes } from '../api/data.js';

const memeTemplate=(meme)=>html `
<div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${meme.title}</p>
                            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${meme._id}">Details</a>
                        </div>
                    </div>
                </div>
`;

const memesTemplate=(data)=>html `
    <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${data.lenght==0
                ? html`<p class="no-memes">No memes in database.</p>`
                : data.map(memeTemplate)}
            </div>
        </section>
`

export async function catalogPage(ctx){
    const data= await getAllMemes();

    ctx.render(memesTemplate(data));
}