import * as member from "../construct-member.js";
import * as result from "../construct-result.js";
let members: Member[] = [];
let results: Result[] = [];

async function fetchMembers () : Promise<MemberJson[]> {
    const data = await fetch (`./assets/data/members.json`);
    return await data.json();
}

async function fetchResults () : Promise<ResultJson[]> {
    const data = await fetch (`./assets/data/results.json`);
    return await data.json();
}

async function buildMemberList (): Promise<void> {
    const membersArr = await fetchMembers();
    for (const memberObj of membersArr) {
        members.push(member.construct(memberObj));
    }
}

async function buildResultList (): Promise<void> {
    const resultsArr = await fetchResults()
    // filter results so that only results with a member id that matches a member id in the members array are included
    const filteredResults = resultsArr.filter(result => members.some(member => member.id === result.memberId));

    for (const resultObj of filteredResults) {
        results.push(result.construct(resultObj));
    }
    sortResults();
}

function sortResults (): void {
    results.sort((a, b) => a.timeInMs - b.timeInMs);
}

export { members, results, buildMemberList, buildResultList };