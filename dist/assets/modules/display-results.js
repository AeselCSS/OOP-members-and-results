import { renderDate, translateDiscipline } from "./utils/display-utils.js";
function displayResults(results) {
    const table = document.querySelector("table#results tbody");
    if (table === null) {
        console.error("No table found in DOM");
        return;
    }
    table.innerHTML = "";
    for (const result of results) {
        const html = `
            <tr>
                <td>${renderDate(result.date)}</td>
                <td>${result.member.name}</td>
                <td>${translateDiscipline(result.discipline)}</td>
                <td>${result.isCompetition() ? "Konkurrence" : "Træning"}</td>
                <td>${result.time}</td>
            </tr>
        `;
        table.insertAdjacentHTML("beforeend", html);
    }
}
export default displayResults;
