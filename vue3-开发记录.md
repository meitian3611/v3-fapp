- 父子传值 - reactive 声明无法重新赋值整个对象

  > 父组件 使用 reactive定义一个对象，通过`v-model:obj` 形式传递给子组件，子组件是无法通过 `emit("update:obj",data)` 对其修改赋值的。
  >
  > 解决方案：
  >
  > 1. 定义的时候多加一层字段，这样去重新赋值也会是响应式   例：`let obj = reactive({ data:{} })`
  >
  > 2. 直接换成 ref，通常ref是用来声明基础数据类型的，声明对象其实内部也是被reactive处理，从官方规范来讲，不建议，但可以解决
  > 3. 如果不是父子组件，在当前组件重新赋值对象，推荐使用 ` Object.assign` 例: `obj = Object.assign(obj,{a:‘123’})`

