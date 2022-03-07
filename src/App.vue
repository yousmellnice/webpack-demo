<template>
  <div>
    hello vue
    <br>
    <router-link to="home1">home1</router-link> | <router-link to="/home2">home2</router-link> | <router-link to="/home3">home3</router-link> | <router-link to="/">index</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>