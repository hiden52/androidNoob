class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// interface Human {
//     name:string;
//     age:number;
//     gender:string;
// }

// const person = {
//     name: "Lizzy",
//     age: 21,
//     gender: "female"
// }

const lynn = new Human("Lynn", 22, "female");

const sayHi = (person: Human): string => {
    return (`Hello ${person.name}, you are ${person.age}, you are ${person.gender}`);
}

console.log(sayHi(lynn));

export { }