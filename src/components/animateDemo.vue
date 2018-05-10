<template>
  <div id="example">
    <!-- <button @click="show = !show">
        Toggle
    </button>
    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
    >
    <p v-if="show">
        Demo
    </p>
    <br><br><br>
    </transition> -->
    <div id="list-demo" class="demo">
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group name="listname" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">
                {{ item }}
            </span>
        </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // el: document.getElementById('example'),
      // show: false,
      items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      nextNum: 10
    }
  },
  methods: {
    // beforeEnter: function (el) {
    //   el.style.opacity = 0
    //   el.style.transformOrigin = 'left'
    // },
    // enter: function (el, done) {
    //   Velocity(el, { opacity: 1, fontSize: '8px' }, { duration: 1500 })
    //   Velocity(el, { fontSize: '16px' }, { complete: done })
    // },
    // leave: function (el, done) {
    //   Velocity(el, { translateX: '5px', rotateZ: '-10deg' }, { duration: 3000 })
    //   Velocity(el, { rotateZ: '10deg' }, { loop: 5 })
    //   Velocity(el, {
    //     rotateZ: '-10deg',
    //     translateY: '5px',
    //     translateX: '5px',
    //     opacity: 0
    //   }, { complete: done })
    // },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.listname-enter-active, .listname-leave-active {
  transition: all 1s;
}
.listname-enter, .listname-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
