<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="/">
                    <img src="../assets/images/left.png"/>
                </a>
            <h3>男装专区</h3>
                
                <a class="iconb" href="shopcar">
                    <img src="../assets/images/shopbar.png"/>
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <section class="list">
                <figure><img src="../assets/images/list-ban01.png"/></figure>
                <div class="search">
                    <input type="search" v-model="search.keywords" placeholder="韩版卫衣" />
                    <label><img @click="dosearch" src="../assets/images/list-search.png"/></label>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <span>全部</span>
                            </a>
                        </li>
                        <li class="list-active">
                            <a href="#">
                                <span>销量</span>
                                <img src="../assets/images/up-red.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>价格</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>评价</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul class="wall" id="wall"
                    v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="disableLoad"
                    infinite-scroll-distance="1"
                >
                    <li class="pic" v-for="(v,k) in goods" :key="k">
                        <router-link :to="'detail?id='+v.id">
                            <img :src="v.logo"/>
                            <p>{{ v.goods_name }}</p>
                            <b>￥58</b><del>￥538</del>
                        </router-link>
                    </li>
                </ul>
                <wv-loadmore id="stopLoad" v-if="isLastPage" type="lineDot" text="loading"></wv-loadmore>
                <wv-loadmore v-else></wv-loadmore>
            </section>
        </div>
    </div>
</template>


<script>
// $(window).load(function(){
//     $('.wall').jaliswall({ item: '.pic' });
// });
export default {
    data(){
        return {
            search:{
                page: 1,
                per_page: 1,
                keywords: this.$route.query.keywords,
                sortby: 'id',
                order: 'desc'
            },
            goods:[],
            isLastPage: false, // 是否是最后一页
            disableLoad: false // 是否禁止滚动 
        }
    },
    methods:{
        dosearch(){
            if(this.$route.query.keywords != "" ){
                this.axios.get('/goods',{params: this.search}).then(res=>{
                    this.goods = res.data.data.data
                })
            }
        },
        loadMore(){

            this.disableLoad = true

            this.search.page++
             this.axios.get('/goods', {params: this.search}).then(res=>{
              // 合并
              this.goods = this.goods.concat(res.data.data.data)
              if(res.data.data.last_page > this.search.page)
              {
                // 允许继续加载
                this.disableLoad = false
              }
              else
              {
                // 最后一页
                this.isLastPage = true
              }
            })
        }
    },
    created(){
        this.dosearch()
    }
}
</script>


<style scoped>

/* .wall li {
    width: 190.47px;
    height: 190.47px;
} */

</style>
