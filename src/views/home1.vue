<template>
  <div>
    wellcome to my home1
  </div>
</template>

<script>
import utils from '../utils/index'
export default {
  created() {
    utils.sayHi()
    console.log(JSON.parse(window.sessionStorage.getItem('test')))
  }
}
</script>

<style>

</style>