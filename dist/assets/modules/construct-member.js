function construct(memberObject) {
    const member = {
        id: memberObject.id,
        firstName: memberObject.firstName,
        lastName: memberObject.lastName,
        active: memberObject.isActiveMember,
        birthDate: new Date(memberObject.dateOfBirth),
        image: memberObject.image,
        get age() {
            const now = new Date();
            const age = now.getFullYear() - this.birthDate.getFullYear();
            if (now.getMonth() < this.birthDate.getMonth() ||
                (now.getMonth() === this.birthDate.getMonth() &&
                    now.getDate() < this.birthDate.getDate())) {
                return age - 1;
            }
            else {
                return age;
            }
        },
        isJunior: () => {
            return member.age < 18;
        },
        isSenior: () => {
            return member.age >= 18;
        },
        get name() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
    Object.defineProperty(member, 'id', {
        writable: false
    });
    Object.defineProperty(member, 'fullName', {
        value: `${member.firstName} ${member.lastName}`,
        enumerable: false
    });
    Object.defineProperty(member, 'image', {
        value: memberObject.image,
        enumerable: false
    });
    return member;
}
export { construct };
