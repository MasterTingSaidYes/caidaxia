# 实用的js代码

## 不停机发布的检测代码

```js
setInterval(() => {
  fetch("http://localhost:3000/test1").
    then(async g => {
      console.log(await g.text())
    }).catch(() => {
      console.log("错误")
    })
}, 10)
```
