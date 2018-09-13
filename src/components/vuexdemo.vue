<template>
    <div>
        <!-- <com-a></com-a> -->
        <!-- <com-b></com-b> -->
        <counter></counter>
    </div>
</template>

<script>
// import comA from './comA.vue'
// import comB from './comB.vue'
import counter from './counter.vue'
    export default {
        name:'vuexdemo',
        components:{
            // "com-a":comA,
            // "com-b":comB
            counter
        }
    }
</script>

<style scoped>

</style>