<template>
  <div>
    <div class="index">
      欢迎来到Index
      <fr-button type="text" size="mini">测试1</fr-button>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import utils from '../utils/index'
// import Vue from 'vue/dist/vue.esm.js'
export default {
  name: 'Index',
  data() {
    return {
      tvalue: '',
      methods: '',
    }
  },
  created() {
    // utils.sayHi()
    var array = [1];
    var other = this._.concat(array, 2, [3], [[4]]);
    const obj = {
      name: 'ysn',
      arr: [1, 2, 3, 4, 5]
    }
    window.sessionStorage.setItem('test', JSON.stringify(obj))
  },
  methods: {
    getMethods() {
      // const str = this.methods.match(/(\S*)}/)
      // console.log(str)
    },
    submit() {
      // const fun = new Function(this.tvalue)
      // const obj = {
      //   template: `
      //     <div>111</div>
      //   `,
      //   created: fun
      // }
      // console.log(obj)

      // 通过eval执行创建对象函数
      // const obj = eval(this.tvalue)
      // console.log(obj)
      // const ButtonCounterComponent = {
      //   template: `
      //     <div><button @click="countAdd">{{count}}次</button><p v-for="(item, index) in option" :key="index">{{item.name}}</p></div>
      //   `,
      //   data: function () {
      //     return {
      //       count: 0,
      //       option: []
      //     }
      //   },
      //   created() {
      //     this.getData()
      //   },
      //   methods: {
      //     countAdd() {
      //       this.count ++ 
      //     },
      //     getData() {
      //       // 动态获取数据
      //       this.option = [
      //         {id:1,name:'a'},
      //         {id:2,name:'b'},
      //         {id:3,name:'c'},
      //       ]
      //     }
      //   },
      // }
      // console.log(ButtonCounterComponent);
      // // const ButtonCounter = Vue.extend(ButtonCounterComponent)
      // const ButtonCounter = Vue.extend(obj)
      // const instance = new ButtonCounter()
      // instance.$mount('#mount-point')
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    height: 100px;
    color: pink;
    font-weight: bold;
  }
  .bt20 {
    margin-bottom: 20px;
  }
  .test {
    margin: 10px 10px 10px 10px;
    padding: 10px 20px 10px 20px;
    color: #ff0000;
  }
</style>