// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies


import { Sharpie } from "./sharpie";


export class sharpieSet {

    sharpieList: Sharpie[] = [];

    countUsable() {
        let count = 0;
        this.sharpieList.forEach((e) => {
            if (e.inkAmount > 0) {
                count++;
            }

        })
        return count;
    }

    removeTrash() {
        let useableSharpie: Sharpie[] = [];
        this.sharpieList.forEach(e => {
            if (e.inkAmount > 0) {
                useableSharpie.push(e);
            }
        });
        return useableSharpie;
    }
}

