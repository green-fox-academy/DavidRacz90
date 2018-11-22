import { countLetter } from "./countLetter"

let test = require('tape');

test('counting letters', t => {
  t.deepEqual(countLetter('cica'), {c: 2, i: 1, a: 1}, 'counting function is working')
  t.end();
})

