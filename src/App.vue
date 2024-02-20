<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
  <MyFooter></MyFooter>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
export default{
  components: {MyHeader, MyFooter},
  setup(){

  }
}
</script>

<style scoped>

</style>
