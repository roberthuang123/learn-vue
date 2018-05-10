<template>
  <div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    <input v-model.number="age" type="number">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <page-two
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @enlarge-text="postFontSize += $event"
      ></page-two>
    </div>
    <button @click="count">加一------------{{num}}</button>
    <component :is="componentType"></component>
    <animate-demo></animate-demo>
  </div>
</template>
<script>
import pageOne from './page1'
import pageTwo from './page2'
import pageThree from './page3'
import pageFour from './page4'
import pageFive from './page5'
import animateDemo from './animateDemo'
export default {
  data () {
    return {
      age: 22,
      posts: [{
        id: 1,
        title: 'hhhh',
        content: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhh'
      }, {
        id: 2,
        title: 'ffff',
        content: 'ffffffffffffffffffffffffffffffff'
      }, {
        id: 3,
        title: 'gggg',
        content: 'gggggggggggggggggggggggggggggg'
      }],
      postFontSize: 1,
      num: 1
    }
  },
  created () {
  },
  components: {
    pageOne,
    pageTwo,
    pageThree,
    pageFour,
    pageFive,
    animateDemo
  },
  computed: {
    componentType: function () {
      switch (this.num) {
        case 1: {
          return 'page-one'
        }
        case 2: {
          return 'page-five'
        }
        case 3: {
          return 'page-three'
        }
        case 4: {
          return 'page-four'
        }
        default: {
          return 'page-five'
        }
      }
    }
  },
  methods: {
    count: function () {
      this.num += 1
    }
  }
}
</script>
