class Person {
    constructor(data) {
        this.data = data;

    }
    fullName() {
        console.log(`${this.data.firstname} ${this.data.lastname}`);
    }

    intro() {
        console.log(`Hi, my name is ${this.data.firstname} and I am ${this.data.age} years old.`);
    }

    firstChild() {
        const firstChild = this.data.children[0];
        console.log(`${firstChild.firstname} ${firstChild.lastname} (${firstChild.age})`);
    }

    lastChild() {
        const lastChild = this.data.children[2];
        console.log(`${lastChild.firstname} ${lastChild.lastname} (${lastChild.age})`);
    }

    firstCar() {
        const firstCar = this.data.cars[0];
        console.log(`${firstCar.brand} ${firstCar.model} (${firstCar.color})`);
    }

    lastCar() {
        const lastCar = this.data.cars[2];
        console.log(`${lastCar.brand} ${lastCar.model} (${lastCar.color})`);
    }

    apartmentPrice() {
        const personName = this.data.firstname;
        const apartmentPrice = this.data.address.price;
        console.log(`${personName} has an apartment for ${apartmentPrice} Euros.`);
    }

    children() {
        const fullName = `${this.data.firstname} ${this.data.lastname}`;
        console.log(`This is a children of ${fullName}:`);

        for (let i = 0; i < this.data.children.length; i++) {
            const child = this.data.children[i];
            const childFullName = `${child.firstname} ${child.lastname}`;
            const childAge = child.age;
            console.log(`${i + 1}. ${childFullName} (${childAge})`);
        }
    }

    aliveChildren() {
        const fullName = `${this.data.firstname} ${this.data.lastname}`;
        let count = 0;
        for (let i = 0; i < this.data.children.length; i++) {
            const child = this.data.children[i];
            if (child.alive === true) {
                ++count;
            }
        }
        console.log(`${fullName} has only ${count} children alive.`);               //iskeliame spausdinima po ciklo, kad gautume suma o ne ta pati sakini su rasta salyga atitinkancia reiksme
    }

    autoPark() {
        const personFirstName = this.data.firstname;
        console.log(`This is ${personFirstName} cars:`);
        for (let i = 0; i < this.data.cars.length; i++) {
            const car = this.data.cars[i];
            console.log(`${i + 1}. ${car.brand} ${car.model} (${car.color})`);
        }
    }

    wherePersonLive() {
        const personFirstName = this.data.firstname;
        const address = `${this.data.address.city} ${this.data.address.street} ${this.data.address.houseNumber}`;
        console.log(`${personFirstName} is living at ${address}`);
    }

    carPrice(index) {
        const carPriceList = [];
        for (let i = 0; i < this.data.cars.length; i++) {
            const car = this.data.cars[i];
            if (i === index) {
                carPriceList.push(this.data.cars[index]);
                console.log(`${car.brand} ${car.model} is purchased for ${car.price} ${car.currency}.`);
            }
        }
    }
}

module.exports = Person;