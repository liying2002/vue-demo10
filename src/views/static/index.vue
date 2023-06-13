<template>
    <div style="margin: 50px 50px;">
        <h1>社团管理系统</h1>
        <el-button type="info" @click="toPresident" round>社长登录</el-button>
        <el-button type="info" @click="toAdmin" round>管理员登录</el-button>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    methods: {
        toPresident() {
            this.$router.push({path:'/presidentLogin',params:{id:1}})
        },
        toAdmin() {
            this.$router.push({path:'/login',params:{id:2}})
        },
    }
});
</script>
<style lang='scss' scoped></style>