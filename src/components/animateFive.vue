<template>
  <div>
    <ul class="container">
      <li class="f_single" v-for="(item, index) in booksList" :key="index">
        <img class="f_img" :src="item.image"/>
        <p class="f_name" :title="item.name">{{item.name}}</p>
        <p class="f_describe" :title="item.auther">{{item.auther}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      booksList: []
    }
  },
  created: function () {
    let that = this
    $.ajax({
      type: 'get',
      url: '../../static/json/book.json',
      async: true,
      success: function (res) {
        that.booksList = res
        console.log(that.booksList[0].auther)
      }
    })
  }
}
</script>

<style scoped>
/* ::-webkit-scrollbar {display:none} */
.container{
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
}
.f_single{
  width: 200px;
  height: 300px;
  border: 1px solid #eeeeee;
  margin-bottom:10px;
}
.f_img{
  width: 200px;
  height:200px;
  display: block;
}
.f_name{
  margin-left: 20px;
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:16px;
}
.f_describe{
  margin-left: 20px;
  font-size: 12px;
  color: orange;
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
