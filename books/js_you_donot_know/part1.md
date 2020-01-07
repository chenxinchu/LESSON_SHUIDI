## 作用域

### LHS 和 RHS

- 变量出现在赋值操作的左侧时进行LHS查询 Ex: a=2;

  变量出现在右侧时进行RHS查询 Ex: console.log(a); 

### 嵌套

- 在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域。
```bash
  function foo(a) { 
    console.log( a + b );
  }
  var b = 2; 
  foo( 2 );   // 4
```
  引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。

### 异常 

- 在变量还没有声明的情况下，LHS和RHS这两种查询的行为是不一样的。
```bash
function foo(a) { 
  console.log( a + b ); 
  b = a;
}
foo( 2 ); //ReferenceError
```
  对b进行RHS时，是无法找到该变量的，如果在所有嵌套中都找不到b，引擎就会抛出 ReferenceError 异常。

  对b进行LHS时，如果所有嵌套中都找不到b，就会在全局作用域中创建一个b(非严格模式下)。