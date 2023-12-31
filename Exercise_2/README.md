# 实现数组的基本操作
难度：simple
## 一、基本操作类型
forEach、concat、copyWithin、filter、map、shift、unshift、reduce、reverse、flat、findIndex、find、some、sort、slice、split 等方法
## 二、各方法分析
### **foreach**
#### 一、关于可选参数 thisArg
回调函数中的this将指向全局对象，因此我们可以在回调函数中访问其他变量。这可能会导致意外的行为，因为变量的值可能会在回调函数执行期间被修改。如果在回调函数执行期间发生了这种情况，我们可能会得到意外的结果，因为我们期望的值与实际的值不同。因此，最好在使用forEach方法时始终设置thisArg参数，以确保回调函数中的this指向我们期望的对象。

#### 二、需要了解的知识内容
- let _nextArg = arguments[1] || window; 需要弄清这两个参数的含义
- let _arr = this; 需要弄清 this 的指代 https://zhuanlan.zhihu.com/p/267982132

 ### **map**
 数组的map方法在TypeScript中的语法如下：
- array.map(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

其中，参数说明如下：
- callbackfn：必需。一个函数，用于操作数组中的每个元素。该函数可以接受三个参数：
- value：必需。当前元素的值。
- index：可选。当前元素的索引。
- array：可选。当前元素所属的数组对象。
- thisArg：可选。对象作为该执行回调时使用，传递给函数，用作 “this” 的值。如果省略了 thisArg，则使用全局对象。

与JavaScript中的map方法相比，TypeScript中的map方法多了一个类型参数T和U，用于指定数组中元素的类型和返回值的类型。

### **CopyWithin**
其中的 start 参数在 lib.es2015.core.d.ts 中描述如下

    @param start If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. If start is omitted, `0` is used.

在理解上遇到一些问题，这三个 if 的优先级如何，在考证和学习之后得出的结论如下

如果忽略了 start 参数，将会使用默认值 0， 当 start 参数为负数时，他会被视为 length+start; 这意味着可以通过传递附属来制定数组末尾开始计算的索引位置。
当 end 参数为负数时，它将被解释为 length+end。这意味着可以使用附属指定相对于数组末尾开始计算索引位置。