<template>
  <div>
    <navhead></navhead>
    <a v-link="{ path: '/' }">Go to 增加社区</a>
    <br>
    <a v-link="{ path: '/test' }">Go to Test</a>
    <router-view
        keep-alive
        transition
        transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
import navhead from './__common/views/navhead.vue'

// 自定义标签 不能为  XxxYyy  可以为 Xxxyyy 或者 xxxyyy ,选取规范为 Xxxyyy
// header 和 head 都是关键词 不能用

// .vue 命名规范 展示小模块 xxyy  页面大组件 Xxxyy  元件 xxyy

export default {
  components: {
    navhead
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
