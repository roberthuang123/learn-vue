<template>
  <div>
    <h3>{{ post.title }}</h3>
    <button @click="$emit('enlarge-text', 0.1)">
      Enlarge text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>
<script>
export default {
  props: ['post'],
  data: function () {
    return {
      count: 0
    }
  }
}
</script>
