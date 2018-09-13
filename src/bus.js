// import Vue from 'vue'
// const bus = new Vue()
// export default bus 

// vue插件的方法，封装中央事件主线的方法

import Vue from 'vue'
 
const bus = new Vue()
// 在Vue原型的方法上挂载bus
export default {
    install (Vue){
        Vue.prototype.$bus = bus
    }
} 
