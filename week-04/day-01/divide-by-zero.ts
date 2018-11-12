// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function dividing(number: number): number {
    if (number === 0) {
        throw ('fail');
    }
    return number / 10;
}

try {
    console.log(dividing(0));
} catch(e) {
    console.log(e)
}