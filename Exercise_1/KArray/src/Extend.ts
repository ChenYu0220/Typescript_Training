declare global {
    interface Array<T>{
        kForeach(callBack:(value:T,index:number,array:T[])=>void,thisArg?:any):void;
        kConcat(concatArr:T[]):T[];
        kCopyWithin(target: number, start?: number, end?: number): this;
        kFilter(callBack:(value:T,index:number,array:T[])=>boolean,thisArg?:any):T[];
        kMap<U>(callBack:(value:T,index?:number,array?:T[])=>U,thisArg?:any):U[];
        kFindIndex(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):number;
        kFind(predicate:(value:T,index:number,obj:Array<T>)=>boolean,thisArg?:any):T|undefined;
        kShift():T | undefined;
        kUnshift(...items: T[]):number;
        kReduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
        
        kReverse():void;
        kFlat():void;
        kSome():void;
        kSort():void;
        kSlice():void;
        kSplit():void;
    }
}

export function extendArrayProto(){
/**
* @description 重写 foreach 方法
*/
Array.prototype.kForeach = function(callBack,thisArg){
    let length = this.length;
    for (let i = 0; i < length; i++) {
        callBack.call(thisArg, this[i], i, this);
      }
}

/**
* @description 重写 concat 方法
*/
Array.prototype.kConcat = function<T>(concatArr:T[]){
    let arr = this;
    concatArr = [...concatArr] 
    concatArr.kForeach((value=>{
        arr.push(value)
    }));
    return arr;
}

/**
* @description 重写 copyWith 方法
*/
Array.prototype.kCopyWithin = function(target: number, start?: number, end?: number){
    let arr = this;
    let arrLength = arr.length;
    target = target >0 ? target : target + arrLength;
    if(target > arrLength){
        return arr
    }
    if(end === undefined){
        end = arrLength
    }
    if(start === undefined){
        start = 0
    }
    else {
        start = start <= 0 ? 0 : Math.max(start,arrLength);
    }
    end = end ?? arrLength;
    if(start >= end){
        return arr;
    }
    let section = []
    let sectionLength = end - start;
    for(let i = 0; i< sectionLength; i++){
        section.push(arr[start+i]);
    }
    for (let i = 0; i<sectionLength; i++){
        arr[target+i] = section[i]
    }
    return arr;
};

/**
* @description 重写 filter 方法
*/
Array.prototype.kFilter = function<T>(callBack:(value:T,index:number,array:T[])=>boolean,thisArg?:any):T[]{
    let arr = this;
    let result:T[] = [];
    this.kForeach((value,index)=>{
        if(callBack.call(thisArg,value,index,arr)){
            result.push(value);
        }
    })
    return result
}

/**
* @description 重写 map 方法
*/
Array.prototype.kMap = function<T,U>(callBack:(value:T,index?:number,array?:any)=>U,thisArg?:any):U[]{
    let arr = this;
    let length = arr.length;
    let result = new Array(length);
    arr.kForeach((value,index,arr)=>{
        result[index]=  callBack.call(thisArg,value,index,arr)
    })
    return result
}

/**
* @description 重写 findIndex 方法
*/
Array.prototype.kFindIndex = function<T>(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):number{
    if(this == null){
        throw new TypeError('kFindIndex called on null or undefined');
    }
    let arr = this;
    let key = 0;
    let length = arr.length;
    while(key<length){
        let value = arr[key];
        if(predicate.call(thisArg,value,key,arr)){
            return key
        }
        key ++;
    }
    return -1;
}

/**
* @description 重写 find 方法
*/
Array.prototype.kFind = function<T>(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):T|undefined{
    if(this == null){
        throw new TypeError('kFind called on null or undefined');
    }
    let arr = this;
    let key = 0;
    let length = arr.length;
    while(key<length){
        let value = arr[key];
        if(predicate(value,key,arr)){
            return value
        }
        key ++;
    }
    return undefined
}

/**
* @description 重写 shift 方法
*/
Array.prototype.kShift = function<T>():T|undefined{
    let arr = this;
    if(arr.length <=0){
        return
    }
    let firstElement = arr[0];
    arr = arr.kFilter((_element,index)=>
        index !== 0
    )
    return firstElement
}

/**
* @description 重写 unShift 方法 // TODO
*/
Array.prototype.kUnshift = function<T>(...items: T[]):number{
    let arr = this;
    let result:T[] = [];
    items.kForeach((value)=>{
        result.push(value);
    })
    arr = result.kConcat(arr)
    return arr.length
}

/**
* @deprecated 重写 reduce 方法 // TODO
*/
Array.prototype.kReduce = function(){}

/**
* @deprecated 重写 reverse 方法 // TODO
*/
Array.prototype.kReverse = function(){}

/**
* @description 重写 flat 方法 // TODO
*/
Array.prototype.kFlat = function(){}

/**
* @description 重写 some 方法 // TODO
*/
Array.prototype.kSome = function(){}

/**
* @description 重写 sort 方法 // TODO
*/
Array.prototype.kSort = function(){}

/**
* @description 重写 slice 方法 // TODO
*/
Array.prototype.kSlice = function(){}

/**
* @description 重写 split 方法 // TODO
*/
Array.prototype.kSplit = function(){}
}
    