import { getMemberFromId } from "./utils/display-utils.js";
function construct(resultObject) {
    const result = {
        id: resultObject.id,
        date: new Date(resultObject.date),
        memberId: resultObject.memberId,
        discipline: resultObject.discipline,
        resultType: resultObject.resultType,
        _time: resultObject.time,
        member: getMemberFromId(resultObject.memberId),
        get time() {
            return this._time;
        },
        set time(newTime) {
            this._time = newTime;
        },
        get timeInMs() {
            const timeParts = resultObject.time.split(":");
            const minutes = parseInt(timeParts[0]);
            const secondsAndMilliseconds = timeParts[1].split(".");
            const seconds = parseInt(secondsAndMilliseconds[0]);
            const milliseconds = parseInt(secondsAndMilliseconds[1]);
            return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
        },
        isCompetition: () => resultObject.resultType.toLowerCase() === "competition",
        isTraining: () => resultObject.resultType.toLowerCase() === "training"
    };
    Object.defineProperty(result, "id", {
        writable: false
    });
    Object.defineProperty(result, "isCompetition", {
        enumerable: false
    });
    Object.defineProperty(result, "isTraining", {
        enumerable: false
    });
    Object.defineProperty(result, "timeInMs", {
        enumerable: false
    });
    return result;
}
export { construct };
