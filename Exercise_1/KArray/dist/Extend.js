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
    Array.prototype.kConcat = function (arr1, arr2) {
        let result1 = [...arr1, ...arr2]; // 方法一
        let result2 = [...arr1]; // 方法二
        arr2.kForeach((value => {
            result2.push(value);
        }));
        return [...arr1, ...arr2];
    };
    /**
    * @description 重写 copyWith 方法
    */
    Array.prototype.kCopyWithin = function () {
        return [...this];
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
    * @description 重写 shift 方法 // TODO
    */
    Array.prototype.kShift = function () { };
    /**
    * @description 重写 unShift 方法 // TODO
    */
    Array.prototype.kUnshift = function () { };
    /**
    * @deprecated 重写 reduce 方法 // TODO
    */
    Array.prototype.kReduce = function () { };
    /**
    * @deprecated 重写 reverse 方法 // TODO
    */
    Array.prototype.kReverse = function () { };
    /**
    * @description 重写 flat 方法 // TODO
    */
    Array.prototype.kFlat = function () { };
    /**
    * @description 重写 some 方法 // TODO
    */
    Array.prototype.kSome = function () { };
    /**
    * @description 重写 sort 方法 // TODO
    */
    Array.prototype.kSort = function () { };
    /**
    * @description 重写 slice 方法 // TODO
    */
    Array.prototype.kSlice = function () { };
    /**
    * @description 重写 split 方法 // TODO
    */
    Array.prototype.kSplit = function () { };
}
exports.extendArrayProto = extendArrayProto;
