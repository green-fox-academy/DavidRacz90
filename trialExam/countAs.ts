// Create a function that takes a string parameter,
// counts the occurrences of the letter "a", and returns it as a number.

// example: on the input "Apple" the function should return 1 - print this result
// example: on the input "Avocado" the function should return 2 - print this result
// example: on the input "Blueberry" the function should return 0 - print this result

function countAs(text: string): number {
  let counter: number = 0;
  text.split('').forEach(letterA => {
    if (letterA === 'a') {
      counter++;
    }

  })
  return counter;
}

console.log(countAs('alma'));