<template>
    <div>
        <el-table :data="communitys" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column fixed prop="id" label="id" width="80" :sortable="true" :sort-method="sortById" />
            <el-table-column prop="name" label="团设名称" width="60" />
            <el-table-column prop="address" label="团社地址" width="130" />
            <el-table-column prop="charger" label="团社会长" width="130" />
            <el-table-column prop="createTime" label="创建时间" width="100" />
            <el-table-column prop="deleted" label="逻辑删除" width="60" />
            <el-table-column prop="depart" label="学院编号" width="60" />
            <el-table-column prop="description" label="团社介绍" width="200" />
            <el-table-column prop="email" label="团社邮箱" width="60" />
            <el-table-column prop="deleted" label="删除" width="60" />
            <el-table-column prop="logo" label="团社logo" width="60" />
            <el-table-column prop="mobile" label="团社电话" width="60" />
            <el-table-column prop="schoolId" label="学校id" width="60" />
            <el-table-column prop="status" label="状态" width="60" />
            <el-table-column prop="teachers" label="导师" width="60" />
            <el-table-column prop="type" label="类型" width="60" />
            <el-table-column prop="updateTime" label="更新时间" width="60" />
            <el-table-column prop="version" label="版本" width="60" />
            <el-table-column prop="weixin" label="团社公众号" width="60" />
            <el-table-column fixed="right" label="操作" width="200">
                <template #default="scope">
                    <el-button type="info" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button type="info" size="small" @click="dele(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog v-model="dialogFormVisible" title="用户等级编辑">
        <el-form :model="community">
            <el-form-item label="团设名称" :label-width="140">
                <el-input v-model="community.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社地址" :label-width="140">
                <el-input v-model="community.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社会长" :label-width="140">
                <el-input v-model="community.charger" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学院编号" :label-width="140">
                <el-input v-model="community.depart" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社介绍" :label-width="140">
                <el-input v-model="community.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="团社介绍" :label-width="140">
                <el-input v-model="community.description" autocomplete="off" />
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
            <el-form-item label="学校id" :label-width="140">
                <el-input v-model="community.schoolId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="导师" :label-width="140">
                <el-input v-model="community.teachers" autocomplete="off" />
            </el-form-item>
            <el-form-item label="类型" :label-width="140">
                <el-input v-model="community.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="微信公众号" :label-width="140">
                <el-input v-model="community.weixin" autocomplete="off" />
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
import { communityPage, communityDelId, communityAdd, communityEdit } from "../../http/community"
import { ElMessage } from 'element-plus';
import { cloneDeep } from 'lodash-es'
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
    mounted() {
        this.getCommunitysPage(1)
    },
    methods: {
        toEdit(community) {
            console.log(community)
            this.dialogFormVisible = true
            this.community = cloneDeep(community);
        },
        getCommunitysPage(current) {
            const data = {
                current: current,
                size: 5
            }
            communityPage(data).then(res => {
                console.log(res);
                const page = res.data.communities;
                this.communitys = page;
                this.page = page;
            }).catch(err => {
                console.log(err)
            })
        },
        currentchange(current) {
            this.getCommunitysPage(current);
            this.page.current = current;
        },
        cancle() {
            this.dialogFormVisible1 = false
        },
        dele(id) {
            const params = {
                id: id
            }
            communityDelId(params).then(res => {
                console.log(id)
                if (res.success) {
                    this.getCommunitysPage(this.page.current)
                }
                else {
                    console.log(res.msg)
                    return false
                }
            }).catch(err => {

            })
            this.dialogFormVisible1 = false;
        },
        save() {
            const community = this.community;
            if (community.id == 0) {
                communityAdd(community).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false
                        this.getCommunitysPage(this.page.current)
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
            else {
                communityEdit(community).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false
                        this.getCommunitysPage(this.page.current)
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