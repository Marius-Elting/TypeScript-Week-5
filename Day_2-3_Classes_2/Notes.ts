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

class Manager extends Employee {
    private department: string;
    constructor(name: string, age: number, department: string) {
        super(name, age)
        this.department = department
    }
    getName(): string {
        return "Manager " + this.name
    }
}

class Developer extends Employee {
    private programmingLanguage: string;
    constructor(name: string, age: number, programmingLanguage: string) {
        super(name, age)
        this.programmingLanguage = programmingLanguage
    }

    getProgrammingLanguage(): string {
        return this.programmingLanguage
    }
    getName(): string {
        return "Developer " + this.name
    }
}

const printNames = (es: Employee[]) => {
    es.forEach(e => console.log(e.getName()))
    const a = es.map(e => e.getName())
    return a
}

const employees: Employee[] = [
    new Manager("Sophie", 25, "HR"),
    new Manager("anna", 26, "TS")
]



printNames(employees)

export { }