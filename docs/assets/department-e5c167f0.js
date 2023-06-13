import{aa as u,_ as w,d as C,o as E,c as D,b as c,a as t,w as o,I as F,e as m}from"./index-6d93cdec.js";import{E as s,a as _}from"./el-overlay-96de54f2.js";import{a as k,b as y,E as T}from"./el-input-cb5096a2.js";import{c as I,E as N,a as P}from"./el-table-column-6e905ad2.js";import{E as $}from"./el-button-7656940c.js";import"./scroll-0b58d062.js";import"./debounce-ee614a7c.js";const v=e=>u.request({url:"/api/department/all",params:e}),U=e=>u.request({url:"/api/department/delete",params:e}),B=e=>u.request({url:"/api/department/add",method:"post",data:e}),q=e=>u.request({url:"/api/department/edit",method:"post",data:e}),z=C({data(){return{departments:[],page:{total:0,current:1,size:5},dialogFormVisible:!1,dialogFormVisible1:!1,department:{createTime:"",deleted:0,departCode:"",departDesc:"",departName:"",departType:"",id:0,schoolId:0,updateTime:""},formLabelWidth:80}},mounted(){this.getDepartmentsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.department=I(e)},getDepartmentsPage(e){v({current:e,size:5}).then(r=>{console.log(r);const f=r.data.departments;this.departments=f,this.page=f}).catch(r=>{console.log(r)})},currentchange(e){this.getDepartmentsPage(e),this.page.current=e},cancle(){this.dialogFormVisible1=!1},dele(e){U({id:e}).then(r=>{if(console.log(e),r.success)this.getDepartmentsPage(this.page.current);else return console.log(r.msg),!1}).catch(r=>{}),this.dialogFormVisible1=!1},toAdd(){this.dialogFormVisible=!0},save(){const e=this.department;e.id==0?B(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getDepartmentsPage(this.page.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")}):q(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getDepartmentsPage(this.page.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")})}}}),A={class:"dialog-footer"};function L(e,a,r,f,M,R){const d=P,n=$,g=N,i=k,p=y,h=T,b=_;return E(),D(F,null,[c("div",null,[t(g,{data:e.departments,style:{width:"100%"},"row-class-name":e.tableRowClassName},{default:o(()=>[t(d,{fixed:"",prop:"id",label:"id",width:"80",sortable:!0,"sort-method":e.sortById},null,8,["sort-method"]),t(d,{prop:"schoolId",label:"学校id",width:"130"}),t(d,{prop:"departType",label:"学院|处室",width:"130"}),t(d,{prop:"departName",label:"部门名称",width:"160"}),t(d,{prop:"departCode",label:"部门英文名称",width:"250"}),t(d,{prop:"departDesc",label:"部门描述",width:"200"}),t(d,{prop:"updateTime",label:"更新时间",width:"200"}),t(d,{prop:"createTime",label:"创建时间",width:"200"}),t(d,{prop:"deleted",label:"删除",width:"60"}),t(d,{fixed:"right",label:"操作",width:"200"},{default:o(l=>[t(n,{type:"info",size:"small",onClick:V=>e.toEdit(l.row)},{default:o(()=>[m("更新")]),_:2},1032,["onClick"]),t(n,{type:"info",size:"small",onClick:V=>e.dele(l.row.id)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","row-class-name"])]),t(n,{type:"info",onClick:e.toAdd,round:""},{default:o(()=>[m("添加")]),_:1},8,["onClick"]),t(b,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[6]||(a[6]=l=>e.dialogFormVisible=l),title:"学院编辑"},{footer:o(()=>[c("span",A,[t(n,{onClick:a[5]||(a[5]=l=>e.dialogFormVisible=!1)},{default:o(()=>[m("取消")]),_:1}),t(n,{type:"primary",onClick:e.save},{default:o(()=>[m(" 保存 ")]),_:1},8,["onClick"])])]),default:o(()=>[t(h,{model:e.department},{default:o(()=>[t(p,{label:"学校ID","label-width":140},{default:o(()=>[t(i,{modelValue:e.department.schoolId,"onUpdate:modelValue":a[0]||(a[0]=l=>e.department.schoolId=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(p,{label:"学院|处室","label-width":140},{default:o(()=>[t(i,{modelValue:e.department.departType,"onUpdate:modelValue":a[1]||(a[1]=l=>e.department.departType=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(p,{label:"部门名称","label-width":140},{default:o(()=>[t(i,{modelValue:e.department.departName,"onUpdate:modelValue":a[2]||(a[2]=l=>e.department.departName=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(p,{label:"部门英文名称","label-width":140},{default:o(()=>[t(i,{modelValue:e.department.departCode,"onUpdate:modelValue":a[3]||(a[3]=l=>e.department.departCode=l),autocomplete:"off"},null,8,["modelValue"])]),_:1}),t(p,{label:"部门描述","label-width":140},{default:o(()=>[t(i,{modelValue:e.department.departDesc,"onUpdate:modelValue":a[4]||(a[4]=l=>e.department.departDesc=l),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const Q=w(z,[["render",L]]);export{Q as default};
