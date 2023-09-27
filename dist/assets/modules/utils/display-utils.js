import { members } from "./utils.js";
function renderDate(date) {
    return new Intl.DateTimeFormat('da-DK', {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(date);
}
function getMemberFromId(memberId) {
    const member = members.find((member) => member.id === memberId);
    if (member === undefined) {
        throw new Error(`Member with id ${memberId} not found`);
    }
    return member;
}
function translateDiscipline(discipline) {
    switch (discipline.toLowerCase()) {
        case "breaststroke":
            return "Brystsvømning";
        case "butterfly":
            return "Butterfly";
        case "backstroke":
            return "Rygcrawl";
        case "freestyle":
            return "Crawl";
        default:
            return "Ukendt svømmedisciplin";
    }
}
export { renderDate, getMemberFromId, translateDiscipline };
