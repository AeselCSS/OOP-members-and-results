// interfaces for the member and result objects from the json files
interface MemberJson {
    id: string;
    dateOfBirth: string;
    disciplines: string[];
    email: string;
    firstName: string;
    gender: string;
    hasPayed: boolean;
    image: string;
    isActiveMember: boolean;
    isCompetitive: boolean;
    lastName: string;
}

interface ResultJson {
    id: string;
    competitionLocation: string;
    competitionName: string;
    competitionPlacement: number;
    date: string;
    discipline: string;
    memberId: string;
    resultType: string;
    time: string;
}

// interfaces for the constructed member and results objects.
interface Member {
    firstName: string;
    lastName: string;
    active: boolean;
    birthDate: Date;
    image: string;
    renderDateOfBirth: (date: Date) => string;
    age: number;
    isJunior: () => boolean;
    isSenior: () => boolean;
    fullName: string;
}

interface Result {
    id: string;
    date: Date;
    discipline: string;
    memberId: string;
    resultType: string;
    time: string;
    timeInMs: number;
    isCompetition: () => boolean;
}

