<template>
    <el-main>
        <RouterView :key="key"></RouterView>
    </el-main>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    data() {
        return {
            icon:"Expand",
            src: '../../../src/assets/logo.png',
        }
    },
    computed: {
        key() {
            return this.$route.path
            
        },
        
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        },
        collapse(icon){
            if(icon=='Expand'){
                this.icon="Fold"
                this.isCollapse=true;
            }
            else{
                this.icon=='Fold'
                this.isCollapse=false
            }

        },
    }

});
</script>

<style lang="scss" scoped>
</style>
