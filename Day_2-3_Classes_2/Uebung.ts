class Vehicle {
    pricePerMinute: number;
    priceToUnlock: number;
    distanceTravelled: number;
    name: string;
    id: number;
    taken: boolean;
    constructor(ppm: number, ptu: number, distance: number, name: string, id: number, taken: boolean) {
        this.pricePerMinute = ppm;
        this.priceToUnlock = ptu;
        this.distanceTravelled = distance;
        this.name = name;
        this.id = id;
        this.taken = taken;
    }

    getPPM() {
        return this.pricePerMinute
    }
    getPTU() {
        return this.priceToUnlock
    }
    getdistance() {
        return this.distanceTravelled
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getTaken() {
        return this.taken
    }
    setPPM(newPPM: number) {
        this.pricePerMinute = newPPM
    }
    setPTU(newPTU: number) {
        this.priceToUnlock = newPTU
    }
    setName(newName: string) {
        this.name = newName
    }
    updateDistance(newKm: number) {
        this.distanceTravelled += newKm
    }
    isAvailable() {
        return !this.taken
    }
}


type fuelStatus = "full" | "medium" | "empty"

class Car extends Vehicle {
    fuelPercentage: number;
    kilometersLeft: number;
    brand: string;
    constructor(
        ppm: number,
        ptu: number,
        distance: number,
        name: string,
        id: number,
        taken: boolean,
        fuelPercentage: number,
        kilometersLeft: number,
        brand: string,
    ) {
        super(ppm, ptu, distance, name, id, taken)
        this.fuelPercentage = fuelPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    getFuelStatus() {
        let status: fuelStatus;
        if (this.fuelPercentage > 75) {
            status = "full"
        } else if (this.fuelPercentage < 25) {
            status = "empty"
        } else {
            status = "medium"
        }
        return status
    }

    isAvailable() {
        if (!this.taken && this.fuelPercentage > 15) {
            return true
        } else {
            return false
        }
    }
}

class Scooter extends Vehicle {
    batteryPercentage: number;
    kilometersLeft: number;
    brand: string;
    constructor(
        ppm: number,
        ptu: number,
        distance: number,
        name: string,
        id: number,
        taken: boolean,
        batteryPercentage: number,
        kilometersLeft: number,
        brand: string,
    ) {
        super(ppm, ptu, distance, name, id, taken)
        this.batteryPercentage = batteryPercentage
        this.kilometersLeft = kilometersLeft
        this.brand = brand
    }

    isAvailable() {
        if (!this.taken && this.batteryPercentage > 10) {
            return true
        } else {
            return false
        }
    }
}

class Bike extends Vehicle {

    frameNumber: number;
    brand: string;
    constructor(
        ppm: number,
        ptu: number,
        distance: number,
        name: string,
        id: number,
        taken: boolean,
        frameNumber: number,
        brand: string,
    ) {
        super(ppm, ptu, distance, name, id, taken)
        this.frameNumber = frameNumber
        this.brand = brand
    }

    isAvailable() {
        return !this.taken
    }
}


const bike1 = new Bike(0.5, 1, 0, "MyBike1", 1, true, 123, "Ananas")
const bike2 = new Bike(0.5, 1, 0, "MyBike2", 1, false, 123, "Ananas")
const scooter1 = new Scooter(0.5, 1, 0, "MyScooter1", 1, false, 9, 12, "Ananas")
const scooter2 = new Scooter(0.5, 1, 0, "MyScooter2", 1, false, 30, 12, "Ananas")
const car1 = new Car(0.5, 1, 0, "MyCar1", 1, false, 10, 12, "Ananas")
const car2 = new Car(0.5, 1, 0, "MyCar2", 1, false, 20, 12, "Ananas")



const getAvailableVehicles = (el: Vehicle[]) => {
    const output = el.filter((e) => e.isAvailable())
    return output
}
getAvailableVehicles([bike1, bike2, scooter1, scooter2, car1, car2])





export { }