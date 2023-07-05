"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendArrayProto = void 0;
function extendArrayProto() {
    /**
    * @description 重写 foreach 方法
    */
    Array.prototype.kForeach = function (callBack, thisArg) {
        let length = this.length;
        for (let i = 0; i < length; i++) {
            callBack.call(thisArg, this[i], i, this);
        }
    };
    /**
    * @description 重写 concat 方法
    */
    Array.prototype.kConcat = function (concatArr) {
        let arr = this;
        arr.push(...concatArr);
        return arr;
    };
    /**
    * @description 重写 copyWith 方法
    */
    Array.prototype.kCopyWithin = function (target, start, end) {
        let arr = this;
        let arrLength = arr.length;
        target = target > 0 ? target : target + arrLength;
        if (target > arrLength) {
            return arr;
        }
        if (end === undefined) {
            end = arrLength;
        }
        if (start === undefined) {
            start = 0;
        }
        else {
            start = start <= 0 ? 0 : Math.max(start, arrLength);
        }
        end = end !== null && end !== void 0 ? end : arrLength;
        if (start >= end) {
            return arr;
        }
        let section = [];
        let sectionLength = end - start;
        for (let i = 0; i < sectionLength; i++) {
            section.push(arr[start + i]);
        }
        for (let i = 0; i < sectionLength; i++) {
            arr[target + i] = section[i];
        }
        return arr;
    };
    /**
    * @description 重写 filter 方法
    */
    Array.prototype.kFilter = function (callBack, thisArg) {
        let arr = this;
        let result = [];
        this.kForeach((value, index) => {
            if (callBack.call(thisArg, value, index, arr)) {
                result.push(value);
            }
        });
        return result;
    };
    /**
    * @description 重写 map 方法
    */
    Array.prototype.kMap = function (callBack, thisArg) {
        let arr = this;
        let length = arr.length;
        let result = new Array(length);
        arr.kForeach((value, index, arr) => {
            result[index] = callBack.call(thisArg, value, index, arr);
        });
        return result;
    };
    /**
    * @description 重写 findIndex 方法
    */
    Array.prototype.kFindIndex = function (predicate, thisArg) {
        if (this == null) {
            throw new TypeError('kFindIndex called on null or undefined');
        }
        let arr = this;
        let key = 0;
        let length = arr.length;
        while (key < length) {
            let value = arr[key];
            if (predicate.call(thisArg, value, key, arr)) {
                return key;
            }
            key++;
        }
        return -1;
    };
    /**
    * @description 重写 find 方法
    */
    Array.prototype.kFind = function (predicate, thisArg) {
        if (this == null) {
            throw new TypeError('kFind called on null or undefined');
        }
        let arr = this;
        let key = 0;
        let length = arr.length;
        while (key < length) {
            let value = arr[key];
            if (predicate(value, key, arr)) {
                return value;
            }
            key++;
        }
        return undefined;
    };
    /**
    * @description 重写 shift 方法
    */
    Array.prototype.kShift = function () {
        let arr = this;
        if (arr.length <= 0) {
            return;
        }
        let firstElement = arr[0];
        arr = arr.kFilter((_element, index) => index !== 0);
        return firstElement;
    };
    /**
    * @description 重写 unShift 方法
    */
    Array.prototype.kUnshift = function (...items) {
        let arr = this;
        arr = items.kConcat(arr);
        return arr.length;
    };
    /**
    * @deprecated 重写 reduce 方法
    */
    Array.prototype.kReduce = function (callbackfn, initialValue) {
        let arr = this;
        let arrCopy = [...arr];
        if (initialValue !== undefined) {
            arrCopy.kUnshift(initialValue);
        }
        let accumulator = arrCopy[0];
        arrCopy.kForeach((value, index) => {
            accumulator = callbackfn(accumulator, value, index, arrCopy);
        });
        return accumulator;
    };
    /**
    * @deprecated 重写 reverse 方法
    */
    Array.prototype.kReverse = function () {
        let arr = this;
        let reservedArr = [];
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            reservedArr.push(arr.pop());
        }
        arr = reservedArr;
        return arr;
    };
    /**
    * @description 重写 flat 方法
    */
    Array.prototype.kFlat = function (depth = 1) {
        let arr = this;
        let flattedArray = [];
        for (const item of arr) {
            if (Array.isArray(item) && depth > 0) {
                flattedArray.push(...item.kFlat(depth - 1));
            }
            else {
                flattedArray.push(item);
            }
        }
        return flattedArray;
    };
    /**
    * @description 重写 some 方法
    */
    Array.prototype.kSome = function (predicate, thisArg) {
        let arr = this;
        let result = false;
        arr.kForeach((value, index) => {
            let tempResult = predicate(value, index, arr);
            if (typeof tempResult !== "boolean") {
                tempResult = false;
            }
            result = result || tempResult;
        });
        return result;
    };
    /**
    * @description 重写 sort 方法 // TODO
    */
    Array.prototype.kSort = function (compareFn) {
        let arr = this;
        arr.sort(compareFn);
        return arr;
    };
    /**
    * @description 重写 slice 方法
    */
    Array.prototype.kSlice = function (start, end) {
        let arr = this;
        let arrLength = arr.length;
        end = (end === undefined) ? arrLength : (end < 0 ? arrLength + end : end);
        start = (start === undefined) ? 0 : (start < 0 ? arrLength + start : start);
        if (start > end) {
            return [];
        }
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(arr[i]);
        }
        return result;
    };
    /**
    * @description 重写 split 方法 // TODO
    */
    Array.prototype.kSplice = function (start, deleteCount = 0, ...items) {
        let arr = this;
        let arrLength = arr.length;
        let deletedArr = [];
        if (start < 0) {
            start = Math.max(length + start, 0);
        }
        if (start > arrLength) {
            start = arrLength;
        }
        // 删除元素的数量
        let deleteElementCount = Math.min(deleteCount || 0, arrLength - start);
        // 备份删除元素
        for (let i = 0; i < deleteElementCount; i++) {
            deletedArr.push(arr[start + i]);
        }
        // 删除元素
        let itemsToInsert = items || [];
        let itemsCount = itemsToInsert.length;
        let newArrLength = arrLength - deleteElementCount + itemsCount;
        let newArray = new Array(newArrLength);
        for (let i = 0; i < start; i++) {
            newArray.push(arr[i]);
        }
        items.kForeach((value) => {
            newArray.push(value);
        });
        for (let i = start + deleteElementCount; i < arr.length; i++) {
            newArray.push(arr[i]);
        }
        arr.length = 0;
        newArray.kForeach((value) => {
            arr.push(value);
        });
        return deletedArr;
    };
}
exports.extendArrayProto = extendArrayProto;
