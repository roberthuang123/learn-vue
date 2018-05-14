<template>
  <div>
    <v-counter></v-counter>
    <input v-focus placeholder="请输入内容。。。">
  </div>
</template>

<script>
import vCounter from './counter'
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  components: {
    vCounter
  }
}
</script>
