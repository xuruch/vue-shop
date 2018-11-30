<template>
    <div>
        <header class="top-header">
            <a class="text texta" href="/">取消</a>
            <h3>注册</h3>
            <a class="text" href="login">登录</a>
        </header>
        
        <div class="login">
            <form action="" method="post">
                <ul>
                    <li>
                        <img src="../assets/images//login.png"/>
                        <label>账号</label>
                        <input type="text" v-model="form.username" placeholder="请输入账号"/>
                    </li>
                    <li>
                        <img src="../assets/images//password.png"/>
                        <label>密码</label>
                        <input type="password" v-model="form.passworld" placeholder="请输入密码"/>
                    </li>
                    <li>
                        <img src="../assets/images//password.png"/>
                        <label>密码</label>
                        <input type="password" v-model="form.passworld_confirmation" placeholder="请确认密码"/>
                    </li>
                </ul>
                <input @click="regist" type="button" value="立即注册"/>
            </form>
        </div>
    </div>
</template>

 
<script>
import { Dialog , Toast  } from 'we-vue'
export default {
    data(){
        return {
            form:{
                username:'',
                passworld:'',
                passworld_confirmation:''
            }   
        }
    },
    methods:{
        regist(){
            this.axios.post('/members',this.form).then(res=>{
                if(res.data.status == 200){
                    Dialog({
                        message: '注册成功',
                        skin: 'ios'
                    }).then(res=>{
                        this.$router.push('/login')
                    })
                }else {
                    Toast.fail({
                        duration: 2000,
                        message: '注册失败'
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
