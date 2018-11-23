import { fibonacci } from "./fibonacci"

let test = require('tape')

const case1 = 5;
const case2 = 0;
const case3 = -1
const case4 = 's'


test('Fibonacci testing', t => {
  t.Equal(fibonacci(case1), 8, 'the fibonacci function is working');
  t.end();
})

test('Fibonacci testing', t => {
  t.deepEqual(fibonacci(case2), 0, 'the fibonacci function is working');
  t.end();
})

test('Fibonacci testing', t => {
  t.deepEqual(fibonacci(case3), 0, 'the fibonacci function is working');
  t.end();
})

test('Fibonacci testing', t => {
  t.deepEqual(fibonacci(case4), 0, 'the fibonacci function is working');
  t.end();
})

