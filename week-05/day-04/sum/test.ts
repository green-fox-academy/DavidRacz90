import {Sum} from "./sum"

let test = require('tape');
const numberList: number[] = [1, 2, 3, 4, 5];
const numberInArray: number[] = [7];
const emptyArray: number[] = [];
const nullArray: number[] = [null]
const stringArray: any[] = ['something'];

test('Testing sum method', t => {
  let newSum = new Sum;
  t.equal(newSum.sum(numberList), 15, 'The sum method is working');
  t.end();
})

test('Testing sum method', t => {
  let newSum = new Sum;
  t.equal(newSum.sum(numberInArray), 7, 'The sum method is working');
  t.end();
})

test('Testing sum method', t => {
  let newSum = new Sum;
  t.equal(newSum.sum(emptyArray), 0, 'The sum method is working');
  t.end();
})

test('Testing sum method', t => {
  let newSum = new Sum;
  t.equal(newSum.sum(nullArray), 0, 'The sum method is working');
  t.end();
})

test('Testing sum method', t => {
  let newSum = new Sum;
  t.notEqual(newSum.sum(stringArray), NaN, 'The sum method is working');
  t.end();
})




