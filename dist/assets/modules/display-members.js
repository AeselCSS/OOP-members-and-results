import { renderDate } from "./utils/display-utils.js";
function displayMembers(members) {
    const table = document.querySelector("table#members tbody");
    if (table === null) {
        console.error("Missing HTML element table#members tbody");
        return;
    }
    table.innerHTML = '';
    for (const member of members) {
        const html = `
        <tr>
            <td>${member.name}</td>
            <td>${member.active ? "Ja" : "Nej"}</td>
            <td>${renderDate(member.birthDate)}</td>
            <td>${member.age}</td>
            <td>${member.isJunior() ? "Junior" : "Senior"}</td>
        </tr>
        `;
        table.insertAdjacentHTML("beforeend", html);
    }
}
export default displayMembers;
