import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            userinfo: {
                "state": 1,
                "id": 0,
                "userName": "",
                "userType": "",
                "token": "",
                "binding": 0,
                "createTime": "",
                "updateTime": "",
                "email": ""
            }
        }
    },
    getters:{
        getToken(){
            return this.token;
        }
    },
    actions:{
        setToken(token){
            this.token=token
        },
        fillUserinfo(user){
            this.userinfo=user
        }
    },
    persist:{
        enabled:true,
        strategies:[
            {
                key:'userinfo',
                storage:localStorage,
                paths: ['token','userinfo']
            }
        ]
    }
})
