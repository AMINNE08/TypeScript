import React from 'react';

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

const App: React.FC = () => {
    const myCar = new Car("Toyota", "Corolla", 2021);

    React.useEffect(() => {
        console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
        myCar.start();
    }, []);

    return (
        <div>
            <h1>Check the console for car details!</h1>
        </div>
    );
};

export default App;
