import { catchError } from "./Decorator";

@catchError()
export class Calculator {
    public add(a: any, b: any): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error("Wrong input type!");
        }
        return a + b;
      }
    public multiply(a:any,b:any):number{
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Wrong input type!");
        }
        return a * b;
    }
}