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


const bike = new Vehicle(0.5, 1, 0, "MyBike", 1, false)



