class Employee {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

    setName(newName: string) {
        this.name = newName
    }
    setAge(newAge: number) {
        this.age = newAge
    }
}


let john = new Employee("John", 30)
john.setAge(20)
john.setName("Johnny")
console.log(john.getAge())
console.log(john.getName())
console.log(john.age)

class newEmployee {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

    setName(newName: string) {
        this.name = newName
    }
    setAge(newAge: number) {
        this.age = newAge
    }
}


const john2 = new newEmployee("John", 30)

console.log(john2)

