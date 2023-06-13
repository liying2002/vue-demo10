<template>
    <div>
        <el-table :data="schools" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column fixed prop="id" label="id" width="80" :sortable="true" :sort-method="sortById" />
            <el-table-column prop="schoolName" label="学校名称" width="130" />
            <el-table-column prop="description" label="学校说明" width="130" />
            <el-table-column prop="longitude" label="经度" width="130" />
            <el-table-column prop="latitude" label="纬度" width="130" />
            <el-table-column prop="enable" label="是否启用" width="60" />
            <el-table-column prop="deleted" label="删除" width="60" />
            <el-table-column prop="updateTime" label="更新时间" width="130" />
            <el-table-column prop="createTime" label="创建时间" width="130" />
            <el-table-column prop="province" label="省" width="130" />
            <el-table-column prop="area" label="市|县" width="130" />
            <el-table-column prop="city" label="城市" width="130" />
            <el-table-column prop="address" label="地址" width="130" />
            <el-table-column fixed="right" label="操作" width="200">
                <template #default="scope">
                    <el-button type="info" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button type="info" size="small" @click="dele(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-button type="info" @click="toAdd" round>添加</el-button>
    <el-dialog v-model="dialogFormVisible" title="学校信息编辑">
        <el-form :model="school">
            <el-form-item label="学校名称" :label-width="140">
                <el-input v-model="school.schoolName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学校说明" :label-width="140">
                <el-input v-model="school.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="经度" :label-width="140">
                <el-input v-model="school.longitude" autocomplete="off" />
            </el-form-item>
            <el-form-item label="纬度" :label-width="140">
                <el-input v-model="school.latitude" autocomplete="off" />
            </el-form-item>
            <el-form-item label="省" :label-width="140">
                <el-input v-model="school.province" autocomplete="off" />
            </el-form-item>
            <el-form-item label="市|县" :label-width="140">
                <el-input v-model="school.area" autocomplete="off" />
            </el-form-item>
            <el-form-item label="城市" :label-width="140">
                <el-input v-model="school.city" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地址" :label-width="140">
                <el-input v-model="school.address" autocomplete="off" />
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
import { schoolPage, schoolDelId, schoolAdd, schoolEdit } from "../../http/school"
import { ElMessage } from 'element-plus';
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
            schools: [],
            page: {
                total: 0,
                current: 1,
                size: 1
            },
            dialogFormVisible: false,
            dialogFormVisible1: false,
            school: {
                "address": "",
                "area": "",
                "city": "",
                "createTime": "",
                "deleted": 0,
                "description": "",
                "enable": 0,
                "id": 0,
                "latitude": "",
                "longitude": "",
                "province": "",
                "schoolName": "",
                "updateTime": ""
            },
            formLabelWidth: 80,
        }
    },
    mounted() {
        this.getSchoolsPage(1)
    },
    methods: {
        toEdit(school) {
            console.log(school)
            this.dialogFormVisible = true
            this.school = cloneDeep(school);

        },
        getSchoolsPage(current) {
            const data = {
                current: current,
                size: 2,
            }
            schoolPage(data).then(res => {
                console.log(res);
                const page = res.data.schools;
                this.schools = page;
                this.page = page;
            }).catch(err => {
                console.log(err)
            })
        },
        currentchange(current) {
            this.getSchoolsPage(current);
            this.page.current = current;
        },
        cancle() {
            this.dialogFormVisible1 = false
        },
        dele(id) {
            const params = {
                id: id
            }
            schoolDelId(params).then(res => {
                console.log(id)
                if (res.success) {
                    this.getSchoolsPage(this.page.current)
                }
                else {
                    console.log(res.msg)
                    return false
                }
            }).catch(err => {

            })
            this.dialogFormVisible1 = false;
        },
        toAdd() {
            //到添加页面
            this.dialogFormVisible = true
        },
        save() {
            const school = this.school;
            if (school.id == 0) {
                schoolAdd(school).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false
                        this.getSchoolsPage(this.page.current)
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
                schoolEdit(school).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false
                        this.getSchoolsPage(this.page.current)
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