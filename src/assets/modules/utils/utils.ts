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
    const resultsArr = await fetchResults();
    for (const resultObj of resultsArr) {
        results.push(result.construct(resultObj));
    }
}


export { members, results, buildMemberList, buildResultList };