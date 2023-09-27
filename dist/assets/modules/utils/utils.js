import * as member from "../construct-member.js";
import * as result from "../construct-result.js";
let members = [];
let results = [];
async function fetchMembers() {
    const data = await fetch(`./assets/data/members.json`);
    return await data.json();
}
async function fetchResults() {
    const data = await fetch(`./assets/data/results.json`);
    return await data.json();
}
async function buildMemberList() {
    const membersArr = await fetchMembers();
    for (const memberObj of membersArr) {
        members.push(member.construct(memberObj));
    }
}
async function buildResultList() {
    const resultsArr = await fetchResults();
    const filteredResults = resultsArr.filter(result => members.some(member => member.id === result.memberId));
    for (const resultObj of filteredResults) {
        results.push(result.construct(resultObj));
    }
    sortResults();
}
function sortResults() {
    results.sort((a, b) => a.timeInMs - b.timeInMs);
}
export { members, results, buildMemberList, buildResultList };
