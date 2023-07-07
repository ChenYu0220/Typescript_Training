import { hasWithTypes } from "./CheckProperty";
import { Example } from "./Example";

let example = new Example;

console.debug(hasWithTypes(example,"name",String)); // true
console.debug(hasWithTypes(example,"name",Number)); // false
console.debug(hasWithTypes(example,"age",Number));  // false
console.debug(hasWithTypes(example,"add",Function));  // true
