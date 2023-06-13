
import instance from "./axios";
const userLogin=(data)=>{
     return instance.request({
        url:'api/mobile/elogin', 
        method:'post',
        data
    })
} 
const adminLogin=(data)=>{
    return instance.request({
        url:'', 
        method:'post',
        data
    })
}
const schoolPage=(params)=>{
    return instance.request({
        url:'/api/school/all',
        params
    })
}
const schoolDelId=(params)=>{
    return instance.request({
        url:'/api/school/delete',
        params
    })
}
const schoolAdd=(data)=>{
    return instance.request({
        url:'/api/school/add',
        method:'post',
        data
    })
}
const schoolEdit=(data)=>{
    return instance.request({
        url:'/api/school/edit',
        method:'post',
        data
    })
}
export {
    userLogin,
    adminLogin,
    schoolPage,
    schoolDelId,
    schoolAdd,
    schoolEdit
}