import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let fleetOfThing: Thing[] = [
    new Thing('Get Milk'),
    new Thing('Remove the obstacles'),
    new Thing('Stand up'),
    new Thing('Eat lunch'),
]

fleetOfThing.forEach((e, i,a) => {
    fleet.add(e);
    if(i >= 2) {
        e.complete();
    }
});

fleet.print();

