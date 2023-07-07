"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckProperty_1 = require("./CheckProperty");
const Example_1 = require("./Example");
let example = new Example_1.Example;
console.debug((0, CheckProperty_1.hasWithTypes)(example, "name", String));
console.debug((0, CheckProperty_1.hasWithTypes)(example, "name", Number));
console.debug((0, CheckProperty_1.hasWithTypes)(example, "age", Number));
console.debug((0, CheckProperty_1.hasWithTypes)(example, "add", Function));
