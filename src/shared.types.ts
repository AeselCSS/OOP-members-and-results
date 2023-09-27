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


