// 遍历 Object
export type KFilter<T,U> = {
    [key in keyof T] : T[key] extends U ? key : never;
}[keyof T];

// 递归方式
export type SFilter<T,U> = T extends [] ? [] : T extends [infer H, ...infer R] ? [H, ...SFilter<R, U>] : [];
