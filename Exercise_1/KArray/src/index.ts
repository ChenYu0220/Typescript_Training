import { extendArrayProto } from "./ArrayExtend";

extendArrayProto()

let testArray:number[] = [1,2,3]
console.log("====");
console.log("Below are the result of kForeach:");
testArray.kForeach(function(value:number){
    console.log(value);
})

console.log("====");
console.log("Below are the result of kCopyWithin:");
let a = [4,5]
console.log(testArray.kConcat(a))

testArray.splice