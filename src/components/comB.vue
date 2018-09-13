<template>
    <div>
        <button @click="sub">-</button>
        <strong>{{count}}</strong>
        <button @click="add">+</button>
        <br>
        <button @click="handleclick">中央事件主线传值</button>
    </div>
</template>

<script>
// import bus from '../bus.js'
    export default {
        name:"com_b",
        props:{
            count:Number
        },
        data(){
            return {
                data:'中央事件主线传值'
            }
        },
        methods:{
            sub(){
                this.$emit('sub')
            },
            add(){
                this.$emit('add')
            },
            handleclick(){
                // bus.$emit('data',this.data)
                this.$bus.$emit('data',this.data)
            }
        }
    }
</script>

<style scoped>

</style>