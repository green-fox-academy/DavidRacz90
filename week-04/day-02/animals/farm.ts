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

    breed(newAnimal: animal) {
        
        if(this.slots > 0){
            this.listOfAnimals.push(newAnimal);
            this.slots--;
            
        } else {
            console.log('No more space');
        }
    }

    slaughter() {
        
    }

}

let oldMcdonaldFarm = new Farm(10);

oldMcdonaldFarm.breed(new animal('cow'));
oldMcdonaldFarm.breed(new animal('chicken'));
oldMcdonaldFarm.breed(new animal('pig'));
oldMcdonaldFarm.breed(new animal('horse'));
oldMcdonaldFarm.breed(new animal('turkey'));
oldMcdonaldFarm.breed(new animal('duck'));
oldMcdonaldFarm.breed(new animal('dog'));


console.log(oldMcdonaldFarm)
