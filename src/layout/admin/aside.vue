<template>
    <el-menu :default-active="activeIndex" mode="horizontal" router :ellipsis="false" @select="handleSelect">
        <el-menu-item index="/admin/registerforclubs">社团报名</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="1">
            <template #title>管理员</template>
            <el-menu-item index="/admin/school">学校管理</el-menu-item>
            <el-menu-item index="/admin/department">学院管理</el-menu-item>
            <el-menu-item index="/admin/community">团社管理</el-menu-item>
            <el-menu-item index="/admin/exit">退出</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
  
<style>

.flex-grow {
    width: 100%;
    text-align: right;
}
</style>