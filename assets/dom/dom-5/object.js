export class Person {
    constructor(name, age, city = "") {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

export const persons = [
    new Person("Klaus", 40),
    new Person("Walter", 45, "Hamburg"),
    new Person("Susi", 39, "Hamburg"),
    new Person("Antonio", 20, "Milano"),
];