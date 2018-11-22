import { apple } from "./apples"

let test = require('tape');

test('testing object apple', t => {
  t.equal(apple.getApple(), 'apple', 'getApple return with apple');
  t.notEqual(apple.getApple(), 'apple2', 'getApple returns not with apple2');
  t.end();
})