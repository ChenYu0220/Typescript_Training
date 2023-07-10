export type DeepReadonly<T> = {
    readonly [key in keyof T] : T[key];
}