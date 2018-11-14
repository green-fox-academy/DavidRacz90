// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { animal } from "./animals"

export class Farm {
    
    listOfAnimals: animal[] = [];
    slots: number;

    constructor(slots:number) {
        this.slots = slots;
    }

    breed(newAnimal: animal): void {
        
        if(this.slots > 0){
            this.listOfAnimals.push(newAnimal);
            this.slots--;
            
        } else {
            console.log('No more space');
        }
    }

    slaughter()  {
        let leastHungryAnimal: number[] = [];
        this.listOfAnimals.forEach((animal) => {
            leastHungryAnimal.push(Math.min(animal.hunger));
            return leastHungryAnimal;
            
        }) 
        console.log(leastHungryAnimal);
    }

}

let oldMcdonaldFarm = new Farm(10);

oldMcdonaldFarm.breed(new animal('cow',50,30));
oldMcdonaldFarm.breed(new animal('chicken',50,40));
oldMcdonaldFarm.breed(new animal('pig',10,40));
oldMcdonaldFarm.breed(new animal('horse',80,32));
oldMcdonaldFarm.breed(new animal('turkey',50,50));
oldMcdonaldFarm.breed(new animal('duck',50,50));
oldMcdonaldFarm.breed(new animal('dog',50,50));



console.log(oldMcdonaldFarm)
oldMcdonaldFarm.slaughter();