import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuex_count:0,
    vuex_prince:30
  },
  mutations: {
    'ADD'(state){
      state.vuex_count++
    },
    'SUB'(state){
      state.vuex_count--
    },
    'CHANGE_COUNT'(state,payload){
      state.vuex_count = payload
    }
  },
  // 推荐在此处进行异步操作
  actions: {
    // 注意，需要传入的参数，传入store为执行本地定义的方法，以及自己定义的形参
    // changeasync(store,payload){
    //   setTimeout(()=>{
    //     store.commit('CHANGE_COUNT',payload)
    //   },2000)
    // },
    // 使用ES5的参数结构的方式简化
    // changeasync({commit},payload){
    //   setTimeout(()=>{
    //     commit('CHANGE_COUNT',payload)
    //   },2000)
    // }
    // 组合action，可以在其他的action中调用action,或者使用在异步中使用promise
    changeasync({commit},payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('CHANGE_COUNT',payload)
          resolve("ok")
        },2000)
      })
    }
    //还可以利用async/await，如下所示：
    // actions: {
    //   async actionA ({ commit }) {
    //     commit('gotData', await getData())
    //   },
    //   async actionB ({ dispatch, commit }) {
    //     await dispatch('actionA') // 等待 actionA 完成
    //     commit('gotOtherData', await getOtherData())
    //   }
    // }

    // Action 函数接受一个与 store 实例具有相同方法和属性的 store（可自己定义名称） 对象
    // 可以调用 store.commit 提交一个 mutation，或者通过 store.state 和 store.getters 来获取 state 和 getters
  },
  // store中的“计算属性”,方便一个计算属性传递至不同的页面

  getters:{
    total(state){
      return state.vuex_count * state.vuex_prince
    }
  }
})

// 在模块化的getters中，第一个参数为state，第二个参数为getters,第三个参数为rootState
// 模块中的命名空间：namespaced: true