// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(base: number, powerN: number): number {

  if (powerN === 0) return 1;

  return base * power(base, powerN - 1);
}

console.log(power(4, 2));