<template>
  <div class="home" >
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <comA :price="price" :count="counter"></comA>
    <comB :count="counter" @add="add" @sub="sub"></comB>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import comB from '@/components/comB.vue'
import comA from '@/components/comA.vue'

export default {
  name: 'home',
  data(){
    return {
      counter:0,
      price:20
    }
  },
  components: {
    // HelloWorld
    comA,
    comB
  },
  methods:{
    add(){
      this.counter++
    },
    sub(){
      this.counter--
    }
  }
}
</script>
<style>
.home{
  display: flex;
  flex-direction: column
}
</style>
