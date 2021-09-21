import {
    html
} from '../../node_modules/lit-html/lit-html.js';

import { getAllListings } from '../api/data.js';
import { carTemplate } from './carTemplate.js';

const listingsTemplate=(data)=>html `
    <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${data.lenght==0
                ? html`<p class="no-cars">No cars in database.</p>`
            : data.map(carTemplate)}
            </div>
        </section>
`

export async function listingsPage(ctx){
    const data= await getAllListings();

    ctx.render(listingsTemplate(data));
}