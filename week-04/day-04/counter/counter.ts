// Write a recursive function that takes one parameter: n and counts down from n.

function counter(number: number ): number {
  if ( number > 0) {
    console.log(number)
    return counter(number-1);
  }
  else {
    return number;
  }
}

counter(5);