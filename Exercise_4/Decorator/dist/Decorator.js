"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
function catchError() {
    return function (targetClass) {
        let methods = Object.getOwnPropertyNames(targetClass.prototype); // 将内部方法的名称全部去除得到一个string的数组
        methods.forEach((method) => {
            let originalMethod = targetClass.prototype[method]; // 获得原始方法
            if (typeof originalMethod !== "function") {
                return;
            }
            // 对成员函数进行处理
            targetClass.prototype[method] = function (...args) {
                try {
                    return originalMethod(...args);
                }
                catch (error) {
                    console.error("Error in Method " + method + ": " + error);
                }
            };
        });
    };
}
exports.catchError = catchError;
//# sourceMappingURL=Decorator.js.map