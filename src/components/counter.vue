<template>
    <div>
        <!-- <strong>总价：{{total}}    单价：{{$store.state.vuex_prince}}</strong> -->
        <strong>总价：{{$store.getters.total}}    单价：{{vuex_prince}}</strong>
        <br>
        <button @click="sub">-</button>
        <!-- <strong>{{this.$store.state.vuex_count}}</strong> -->
        <strong>{{vuex_count}}</strong>
        <button @click="add">+</button>
        <br>
        <input type="text" v-model="num">
        <button @click="change">修改</button>
        <!-- <button @click="vuex_change(num)">修改</button> -->
        <button @click="CHANGE_COUNT(num)">修改</button>
        <br>
        <button @click="changeasync">异步修改</button>
        <!-- <button @click="changeasync(num)">异步修改</button> -->
        <!-- <button @click="changesy(num)">异步修改</button> -->
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: "counter",
  data(){
      return{ 
          num:""
      }
  },
  methods:{
    //   ...mapMutations({vuex_change:'CHANGE_COUNT'}),     ===========assigned：指定的
      ...mapMutations(['CHANGE_COUNT',]),
      sub(){
          this.$store.commit('SUB')
      },
      add(){
          this.$store.commit('ADD')
      },
      change(){
          this.$store.commit('CHANGE_COUNT',this.num)
      },
    //   changeasync(){
    //     //   setTimeout(()=>{
    //     //        this.CHANGE_COUNT(this.num)
    //     //   },2000)
    //     this.$store.dispatch('changeasync',this.num)
    //   },
    //   ...mapActions(['changeasync'])
    //   ...mapActions({changesy:'changeasync'})
    changeasync(){
        this.$store.dispatch('changeasync',this.num).then(res=>{
            console.log(res)
        })
    }
  },
  computed:{
    //   total(){
    //       return this.$store.state.vuex_count * this.$store.state.vuex_prince
    //   },
      ...mapState(['vuex_count','vuex_prince','CHANGE']),
      vue_total(){
          return this.vuex_count * this.vuex_prince
      }

  }
};
</script>

<style scoped>
</style>