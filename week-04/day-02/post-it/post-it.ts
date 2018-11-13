// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"



export class PostIt {
    backGroundColor: string;
    text: string;
    textColor: string;

    constructor(backGroundColor, text, textColor) {
        this.backGroundColor = backGroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let newPostIt1 = new PostIt('orange', 'Idea 1', 'blue');
console.log(newPostIt1);

let newPostIt2 = new PostIt('pink', 'Awesome', 'black');
console.log(newPostIt2);

let newPostIt3 = new PostIt('yellow', 'Superb', 'green');
console.log(newPostIt3);


