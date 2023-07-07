export function hasWithTypes(target:object,propertyName:string,propertyType:any){
    // let propertyDescriptor = Reflect.getOwnPropertyDescriptor(target,propertyName);
    // if(propertyDescriptor !== undefined){
    //     let actualType = Reflect.
    // }
    let property = Reflect.get(target,propertyName);
    if(property!==undefined){
        return property.constructor === propertyType
    }
    return false
}