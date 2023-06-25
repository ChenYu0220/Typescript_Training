import { extendArrayProto } from "./Extend";

extendArrayProto()

let testArray:number[] = [1,2,3]
console.log("====");
console.log("Below are the result of kForeach:");
testArray.kForeach(function(value:number){
    console.log(value);
})

console.log("====");
console.log("Below are the result of kCopyWith:");
let copiedArray = testArray.kCopyWithin();
console.log(copiedArray)
