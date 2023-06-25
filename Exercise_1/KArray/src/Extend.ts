declare global {
    interface Array<T>{
        kForeach(callBack:(value:T,index:number,array:T[])=>void,thisArg?:any):void;
        kConcat(arr1:T[],arr2:T[]):T[];
        kCopyWithin():T[];
        kFilter(callBack:(value:T,index:number,array:T[])=>boolean,thisArg?:any):T[];
        kMap<U>(callBack:(value:T,index?:number,array?:T[])=>U,thisArg?:any):U[];
        kFindIndex(predicate:(value:T,index:number,obj:T[])=>boolean,thisArg?:any):number;
        kFind(predicate:(value:T,index:number,obj:Array<T>)=>boolean,thisArg?:any):T|undefined;
        
        kShift():void;
        kUnshift():void;
        kReduce(callBack:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T):T;
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
Array.prototype.kConcat = function<T>(arr1:T[],arr2:T[]){
    let result1 = [...arr1,...arr2] // 方法一
    let result2 = [...arr1] // 方法二
    arr2.kForeach((value=>{
        result2.push(value)
    }));
    return [...arr1,...arr2];
}

/**
* @description 重写 copyWith 方法
*/
Array.prototype.kCopyWithin = function(){
    return [...this];
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
* @description 重写 shift 方法 // TODO
*/
Array.prototype.kShift = function(){}

/**
* @description 重写 unShift 方法 // TODO
*/
Array.prototype.kUnshift = function(){}

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
    