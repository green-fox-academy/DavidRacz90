export function fibonacci(number: any): number {
  
  let a = 1, b = 0, temp;

  while (number >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    number--;
  }

  return b;
}

