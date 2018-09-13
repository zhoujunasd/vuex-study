<template>
    <div>
        <strong>总价：{{total}}    单价：{{price}}</strong>
        <br>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
import bus from '../bus.js'
    export default {
        name:"com_a",
        props:{
            price:Number,
            count:Number
        },
        data(){
            return{
                msg:""
            }
        },
        computed:{
            total(){
                return this.price * this.count
            }
        },
        // 在渲染之前指向的函数
        created(){
            // bus.$on('data',(data)=>{
            //     this.msg = data
            // })
            this.$bus.$on('data',(data)=>{
                this.msg = data
            })
        }
    }
</script>

<style scoped>

</style>