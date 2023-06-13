<template>
    <el-button type="info" @click="toAdd" round>填写社团信息</el-button>
    <el-dialog v-model="dialogFormVisible" title="学院编辑">
        <el-form :model="community">
            <el-form-item label="团社名称" :label-width="140">
                <el-input v-model="community.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社地址" :label-width="140">
                <el-input v-model="community.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社会长" :label-width="140">
                <el-input v-model="community.charger" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社介绍" :label-width="140">
                <el-input v-model="community.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社邮箱" :label-width="140">
                <el-input v-model="community.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社电话" :label-width="140">
                <el-input v-model="community.mobile" autocomplete="off" />
            </el-form-item>
            <el-form-item label="导师" :label-width="140">
                <el-input v-model="community.teachers" autocomplete="off" />
            </el-form-item>
            <el-form-item label="类型" :label-width="140">
                <el-input v-model="community.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社公众号" :label-width="140">
                <el-input v-model="community.weixin" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社logo" :label-width="140">
                <el-input v-model="community.logo" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script>
import { defineComponent } from 'vue'
import {registerforclubsAdd } from "../../http/registerforclubs"
import { ElMessage } from 'element-plus';
export default defineComponent({
    data() {
        return {
            communitys: [],
            page: {
                total: 0,
                current: 1,
                size: 5
            },
            dialogFormVisible: false,
            dialogFormVisible1: false,
            community: {
                "address": "",
                "charger": 0,
                "createTime": "",
                "deleted": 0,
                "depart": 0,
                "description": "",
                "email": "",
                "id": 0,
                "logo": "",
                "mobile": "",
                "name": "",
                "schoolId": 0,
                "status": 0,
                "teachers": "",
                "type": 0,
                "updateTime": "",
                "version": 0,
                "weixin": ""
            },
            formLabelWidth: 80,
        }
    },
    methods: {
        toAdd() {
            //到添加页面
            this.dialogFormVisible = true
        },
        save() {
            const community = this.community;
            if (community.id == 0) {
                registerforclubsAdd(community).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
        },

    },
});
</script>
<style lang='scss' scoped></style>