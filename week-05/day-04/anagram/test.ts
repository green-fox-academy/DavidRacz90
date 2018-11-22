import { anagram} from "./anagram"

let test = require('tape');

test('testing anagram function', t => {
  t.equal(anagram('cica','cica'), true, 'anagram function is working' )
  t.end();
})

test('testing anagram function', t => {
  t.notEqual(anagram('cica','macska'), true, 'anagram function is working' )
  t.end();
})