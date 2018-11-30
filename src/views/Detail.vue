<template>
    <div>
        <header class="detail-header fixed-header">
            <a href="list"><img src="../assets/images/detail-left.png"/></a>
            
            <a href="shopcar" class="right"><img src="../assets/images/shopbar.png"/></a>
        </header>
        
        
        <div class="contaniner fixed-contb">
            <section class="detail"> 
                <figure class="swiper-container">
                    <!-- <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#">
                                <img src="../assets/images/detail-ban02.png"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="#">
                                <img src="../assets/images/detail-ban01.png"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="#">
                                <img src="../assets/images/detail-ban03.png"/>
                            </a>
                        </li>
                        <li class="swiper-slide">
                            <a href="#">
                                <img src="../assets/images/detail-ban04.png"/>
                            </a>
                        </li>
                    </ul> -->
                    <wv-swipe :height="414" :autoplay="4000">
                        <wv-swipe-item v-for="(v,k) in goods.image" :key='k'>
                            <img :src="v.path"/>
                        </wv-swipe-item>
                    </wv-swipe>
                </figure>
                <dl class="jiage">
                    <dt>
                        <h3>{{ goods.goods_name }}</h3>
                        <div class="collect">
                            <img src="../assets/images/detail-heart-hei.png"/>
                            <p>收藏</p>
                        </div>
                    </dt>
                    <dd v-if="goods.sku">
                        <b>￥{{goods.sku[skuSelected].price}}</b>
                        <p>（ 库存量：{{goods.sku[skuSelected].stock}} ）</p>
                        <input type="button" value="￥10.00" readonly />
                        <small>+356积分</small>
                    </dd>
                </dl>
                
                <div class="chose">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;">规格</span>
                    <ul>
                        <li @click="skuSelected=k" :class="{'chose-active' : k==skuSelected}" v-for="(v,k) in goods.sku" :key="k">
                            {{ v.sku_name }}
                        </li>
                    </ul>
                </div>

                 <div class="chose buy_count" v-if="goods.sku">
                   &nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:18px;">购买数量</span>
                   <ul>
                         <wv-number-spinner
                        :min="1"
                        :max="goods.sku[skuSelected].stock"
                        v-model="buyCount">
                    </wv-number-spinner>
                    </ul>
                   
                </div>
                
                <a href="#" class="seven">
                    <b>7</b>天无理由退换货
                </a>
                
                <ul class="same">
                    <a href="#">
                        <span>
                            同类推荐
                        </span>
                        <li class="one">
                            <img src="../assets/images/detail-pp01.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="../assets/images/detail-pp02.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="../assets/images/detail-pp03.png"/>
                            <p>￥188.00</p>
                        </li>
                        <li>
                            <img src="../assets/images/detail-pp04.png"/>
                            <p>￥188.00</p>
                        </li>
                    </a>
                </ul>
                
                <article class="detail-article">
                    <nav>
                        <ul>
                            <li>商品详情</li>
                            <li class="article-active">评价</li>
                        </ul>
                    </nav>
                    <section class="talkbox">
                        <ul class="talk">
                            <li>
                                <figure><img src="../assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="../assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="../assets/images/detail-pp01.png"/>
                                        <img src="../assets/images/detail-pp02.png"/>
                                        <img src="../assets/images/detail-pp03.png"/>
                                        <img src="../assets/images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="../assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                </dl>
                            </li>
                            <li>
                                <figure><img src="../assets/images/detail-tou.png"/></figure>
                                <dl>
                                    <dt>
                                        <p>弱小喵</p>
                                        <time>2015.11.17</time>
                                        <div class="star">
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn01.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                            <span><img src="../assets/images/detail-iocn001.png"/></span>
                                        </div>
                                    </dt>
                                    <dd>还可以吧，很好看，质量还不错，就是快递大叔实在慢死了</dd>
                                    <small>颜色：豹纹凯特</small>
                                    <div class="picbox">
                                        <img src="../assets/images/detail-pp01.png"/>
                                        <img src="../assets/images/detail-pp02.png"/>
                                        <img src="../assets/images/detail-pp03.png"/>
                                        <img src="../assets/images/detail-pp04.png"/>
                                    </div>
                                </dl>
                            </li>
                        </ul>
                    </section>
                    
                </article>
            </section>
        </div>

		<footer class="detail-footer fixed-footer">
			<a href="#" class="go-car">
				<input @click="add_cart" type="button" value="加入购物车"/>
			</a>
			<a href="buy" class="buy">
				立即购买
			</a>
		</footer>
    </div>
</template>


<script>

export default {
    data(){
        return {
            goods: {},
            buyCount: 1,
            skuSelected: 0  
        }
    },
    created(){
        this.axios.get('/goods?id='+this.$route.query.id)
            .then(res=>{
            this.goods = res.data.data
            })
    },
    methods:{
        add_cart(){
            // 读取保存在本地要加入购物车的商品
            let cart = localStorage.getItem('cart')
            cart = cart ? JSON.parse(cart) : []

            // 获取当前勾选的sku_id
            let skuid = this.goods.sku[this.skuSelected].id
            // 获取当前勾选的sku_id
            let price = this.goods.sku[this.skuSelected].price
            // 根据sku_id 从购物车查找商品
            let searchInfo = cart.find((v)=> v.sku_id == skuid)
            if(searchInfo){
                // 如果购物车已经存在这件商品 则从购物车这件商品上加上选中的商品
                searchInfo.buy_count += this.buyCount

                // 如果超过最大库存就存入所有库存量
                if(searchInfo.buy_count > this.goods.sku[this.skuSelected].stock){
                    searchInfo.buy_count = this.goods.sku[this.skuSelected].stock
                }
            }else {
                // 放入购物数组中
                cart.push({
                    "sku_id":skuid,
                    "buy_count":this.buyCount,
                    "price":price,
                    "checked":true,
                })
            }
            // 把数组写回浏览器
            localStorage.setItem('cart', JSON.stringify(cart))
            this.$router.push('shopcar')
            
        }
    }

}
</script>


<style scoped>

</style>

