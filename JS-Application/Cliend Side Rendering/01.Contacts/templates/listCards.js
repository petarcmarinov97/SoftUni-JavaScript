import {html} from '../node_modules/lit-html/lit-html.js';
import contactCard from './contactCard-template.js';

export default (contacts) => html`
<h1>My contacts</h1>
    <div id="contacts">
        ${contacts.map(x => html`${contactCard(x)}`)}
    </div>
`;

