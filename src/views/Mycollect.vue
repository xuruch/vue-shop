<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="../assets/images/left.png"/>
                </a>
            <h3>我的收藏</h3>
                
                <a class="text-top">
                    编辑
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <div style="margin-top: 3%;"></div>
            <section class="list">
                <ul class="wall">
                    <li class="pic">
                        <a href="detail">
                            <img src="../assets/images/list-ph01.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label for="collect1"  onselectstart="return false" class="label1"></label>
                                <input type="checkbox" @click="mycheck" id="collect1"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="detail">
                            <img src="../assets/images/list-ph02.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label for="collect2"  onselectstart="return false" class="label2"></label>
                                <input type="checkbox" @click="mycheck" id="collect2"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic">
                        <a href="detail">
                            <img src="../assets/images/list-ph01.png"/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label class="label3" for="collect3" @click="mycheck" onselectstart="return false"></label>
                                <input type="checkbox" id="collect3"/>
                            </div>
                        </a>
                    </li>
                    <li class="pic" @click="mycheck()">
                        <a href="detail">
                            <img src="../assets/images/list-ph02.png" onlick=""/>
                            <p>韩版青少年休闲修身长袖紧身衬衫</p>
                            <b>￥58</b><del>￥538</del>
                            <div class="collectbar">
                                <label class="label4" for="collect4" @click="mycheck" data-cont='123' onselectstart="return false"></label>
                                <input type="checkbox" id="collect4" @click="mycheck"/>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </section>
            <div class="kong" style="margin-bottom: 16%;"></div>
        </div>
        
        <footer class="collectbox fixed-footer">
            
            <input type="button" value="确认删除" />
        </footer>
    </div>
</template>

<script>
import '@/assets/js/jaliswall.js'
$(window).load(function(){
    $(".loading").addClass("loader-chanage")
    $(".loading").fadeOut(300);
    $('.wall').jaliswall({ item: '.pic' });
    
    $(".text-top").on("touchstart",function(){
        $(".collectbar").fadeToggle(500);
    });
})


export default {
    methods:{
        mycheck:function(){
            console.log('sfafd')
        }
    },
    created(){
    
    }
}
</script>

<style>

</style>
