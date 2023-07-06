"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendMapProto = void 0;
function extendMapProto() {
    /**
    * @description 重写 keys 方法
    */
    Map.prototype.kKeys = function () {
        let map = this;
        let keys = [];
        map.forEach((_value, key) => {
            keys.push(key);
        });
        return keys[Symbol.iterator](); //A method that returns the default iterator for an object. Called by the semantics of the for-of statement.
    };
    /**
    * @description 重写 values 方法
    */
    Map.prototype.kValues = function () {
        let map = this;
        let values = [];
        map.forEach((value, _key) => {
            values.push(value);
        });
        return values[Symbol.iterator]();
    };
}
exports.extendMapProto = extendMapProto;
