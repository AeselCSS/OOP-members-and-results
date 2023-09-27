import {getMemberFromId} from "./utils/display-utils.js";

function construct(resultObject: ResultJson): Result {
    const result = {
        id: resultObject.id,
        date: new Date(resultObject.date),
        memberId: resultObject.memberId,
        discipline: resultObject.discipline,
        resultType: resultObject.resultType,
        _time: resultObject.time,
        member: getMemberFromId(resultObject.memberId),
        get time () {
            return this._time;
        },
        set time (newTime: string) {
            this._time = newTime;
        },
        get timeInMs() {
            // Split the time string into minutes, seconds, and milliseconds
            const timeParts: string[] = resultObject.time.split(":");
            const minutes: number = parseInt(timeParts[0]);
            const secondsAndMilliseconds: string[] = timeParts[1].split(".");

            const seconds = parseInt(secondsAndMilliseconds[0]);
            const milliseconds = parseInt(secondsAndMilliseconds[1]);

            // Calculate the total time in milliseconds
            return (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
        },
        // Check if the result is a competition or a training result
        isCompetition: () => resultObject.resultType.toLowerCase() === "competition",
        isTraining: () => resultObject.resultType.toLowerCase() === "training"
    };

    Object.defineProperty(result, "id", {
        writable: false
    });

    // no method should be enumerable
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