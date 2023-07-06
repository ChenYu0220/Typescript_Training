# 定义一个装饰器
难度：simple
## 一、说明
 定义一个装饰器，在类的声明上，为该类的所有方法添加一个异常处理

 ---
 在 Typescript 4.9.5 中该代码可以正常运行，但在5.1.3 即更高的版本中装饰器会报错。
 在高版本的 Typescript 中我们需要在 tsconfig 中添加下列语句

     "experimentalDecorators": true  