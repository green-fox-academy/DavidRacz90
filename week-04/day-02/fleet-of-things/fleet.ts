import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }

    getThing() {
        return this.things;
    }

    print() {
        this.things.forEach((e, i) => {
            if (e.getCompleted) {
                console.log(`${i + 1}. [x] ${e.getName}`);
            } else {
                console.log(`${i+1}. [] ${e.getName}`);
            }

        })
    }
}

export { Fleet };