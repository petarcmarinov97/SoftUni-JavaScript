import {
    html
} from "../../node_modules/lit-html/lit-html.js";

export let studentTemplate = (student) => html `<tr>
<td>${student.firstName} ${student.lastName}</td>
<td>${student.email}</td>
<td>${student.course}</td>
</tr>
`;

export let allStudentsTemplate = (students) => html `${students.map(s=>studentTemplate(s))}`;