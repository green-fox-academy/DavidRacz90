// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];

let newAnimals = animals.map(element =>{
    element = element + "a";
    return element;
})

console.log(newAnimals);