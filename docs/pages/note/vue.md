# Vue 学习

## index.html

id=app 为vue实例根节点

```html
<html lang="en">
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

```js
import { createApp } from 'vue'
import './style.css' //全局css
import App from './App.vue'

createApp(App).mount('#app')

```

## 组件

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构：
![z](https://cn.vuejs.org/assets/components.7fbb3771.png)

1. 单文件组件

```html
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

## JavaScript 对象来定义

```js
export default {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
}
```

## 使用组件

App.vue

```html
<template>
  <h1>博客测试</h1>
  <blog-post-vue  v-for="item in posts" :go="gooo"  :key="item.id" :title="item.id" :description="item.title"  >
  </blog-post-vue>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BlogPostVue from "./components/BlogPost.vue";
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const gooo = (id: number) => { 
  alert(id)
}
 
</script>

<style>

</style>
```

BlogPost.vue

```html
<template>
<h2 @click="go(title)" >{{title}}</h2>
<div>{{description}}</div>
</template>

<script setup lang="ts">
defineProps<{ title: number, description: string, go: (id: number) => void}>()
</script>
<style scoped>
</style>
```
