import {Bassguitar } from "./bassguitar"
// import {Instrument} from "./instrument"
// import { stringedInstrument } from "./stringedInstrument";
import { Violin } from "./violin"
import { Guitar } from "./electricGuitar"

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new Guitar();
let bassGuitar = new Bassguitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new Guitar(7);
let bassGuitar2 = new Bassguitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
