// // Create Sharpie class
// // We should know about each sharpie their color (which should be a string), 
// width (which will be a floating point number),
//  inkAmount (another floating point number)
// // When creating one, we need to specify the color and the width
// // Every sharpie is created with a default 100 as inkAmount
// // We can use() the sharpie objects
// // which decreases inkAmount
import { sharpieSet } from "./sharpieSet"
export {Sharpie }

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100.0;


    constructor(color, width) {
        this.color = color;
        this.width = width;
    }
    use() {
        this.inkAmount = this.inkAmount-this.width;
        return this.inkAmount;
    }
}

let newSharpie = new Sharpie('green', 47.3);


newSharpie.use();
console.log(newSharpie);
