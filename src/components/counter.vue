<template>
  <div>{{name}}:{{count}}
    <button @click="add">&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'count',
    'name'
  ]),
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   },
  //   name () {
  //     return this.$store.state.name
  //   }
  // },
  methods: {
    add () {
      this.$store.commit('addCount')
      console.log(this.$store.getters.doneTodos)
    }
  }
}
</script>
