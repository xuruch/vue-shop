<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="/">取消</a>
            <h3>登录</h3>
            <a class="text" href="regist">注册</a>
        </header>
        
        <div class="login">
            <form action="" method="post">
                <ul>
                    <li>
                        <img src="../assets/images//login.png"/>
                        <label>账号</label>
                        <input type="text" v-model="username" placeholder="请输入账号"/>
                    </li>
                    <li>
                        <img src="../assets/images//password.png"/>
                        <label>密码</label>
                        <input type="password" v-model="passworld" placeholder="请输入密码"/>
                    </li>
                </ul>
                <input @click="login" type="button" value="登录"/>
            </form>
        </div>
    </div>
</template>

<script>

import { Dialog , Toast  } from 'we-vue'

export default {
    data(){
        return {
            username:'',
            passworld:''
        }
    },
    methods:{
        login(){
            this.axios.post('/login',{
                username: this.username,
                passworld: this.passworld
            }).then(res=>{
                console.log(res)
                if(res.data.status == 200){
                    Dialog({
                        message: '登录成功',
                        skin: 'ios'
                    }).then(()=>{
                        localStorage.setItem('ACCESS_TOKEN',res.data.data.ACCESS_TOKEN);
                        this.$router.push('/')
                    })
                }else if(res.data.status_code == 400){
                    Toast.fail({
                        duration: 2000,
                        message: '密码错误'
                    })
                }else if(res.data.status_code == 404){
                    Toast.fail({
                        duration: 2000,
                        message: '用户不存在'
                    })
                }else {
                    Toast.fail({
                        duration: 2000,
                        message: '用户名或密码错误'
                    })
                }
            })
        }
    }
     
}
</script>

<style>
.login form input[type="button"] {
    width: 94%;
    margin: 5% 3%;
    padding: 4% 0;
    background-color: #FC605A;
    color: #fff;
    font-size: 1.7em;
    border-radius: 0.3em;
    border: none;
}
</style>
