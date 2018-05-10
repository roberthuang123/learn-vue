<template>
  <div>
    <div>第四页</div>
    <input v-focus placeholder="请输入内容。。。">
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
