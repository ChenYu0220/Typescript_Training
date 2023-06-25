"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Extend_1 = require("./Extend");
(0, Extend_1.extendArrayProto)();
let testArray = [1, 2, 3];
console.log("====");
console.log("Below are the result of kForeach:");
testArray.kForeach(function (value) {
    console.log(value);
});
console.log("====");
console.log("Below are the result of kCopyWith:");
let copiedArray = testArray.kCopyWithin();
console.log(copiedArray);
