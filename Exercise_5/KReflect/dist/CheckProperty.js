"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasWithTypes = void 0;
function hasWithTypes(target, propertyName, propertyType) {
    // let propertyDescriptor = Reflect.getOwnPropertyDescriptor(target,propertyName);
    // if(propertyDescriptor !== undefined){
    //     let actualType = Reflect.
    // }
    let property = Reflect.get(target, propertyName);
    if (property !== undefined) {
        return property.constructor === propertyType;
    }
    return false;
}
exports.hasWithTypes = hasWithTypes;
