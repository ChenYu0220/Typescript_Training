"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayExtend_1 = require("./ArrayExtend");
(0, ArrayExtend_1.extendArrayProto)();
let testArray = [1, 2, 3];
console.log("====");
console.log("Below are the result of kForeach:");
testArray.kForeach(function (value) {
    console.log(value);
});
console.log("====");
console.log("Below are the result of kCopyWithin:");
let a = [4, 5];
console.log(testArray.kConcat(a));
testArray.splice;
