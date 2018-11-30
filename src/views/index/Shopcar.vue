<template>
    <div>
        <header class="page-header">
            <h3>购物车</h3>
        </header>
	
        <div class="contaniner fixed-contb">
            <div id="kong" v-if="cart==undefined">
                购物车是空的~~
            </div>
            <section v-for="(v,k) in goods" :key="k" class="shopcar">
                <div class="shopcar-checkbox">
                    <label for="shopcar" @click="checked(v.id)" :class="{'shopcar-checkd':cart.find(v1=>v1.sku_id==v.id).checked}"></label>
                    <input type="checkbox" id="shopcar"/>
                </div>
                <figure><img :src="v.goods.logo"/></figure>
                <dl>
                    <dt>{{ v.goods.goods_name }}</dt>
                    <dd>{{ v.sku_name }}</dd>
                    <div class="add">
                        <span @click="jian(v.id)">-</span>
                        <input type="text" :value="cart.find(v1=>v1.sku_id==v.id).buy_count" />
                        <span @click="jia(v.id)">+</span>
                    </div>
                    <h3>￥{{ v.price }}</h3>
                    <small @click="del($event,v.id)"><img src="../../assets/images/shopcar-icon01.png"/></small>
                </dl>
            </section>
            <!--去结算-->
            <div style="margin-bottom: 16%;"></div>
            <div class="page-footer">
                <div class="shop-go">
                    <b>合计：￥{{ totalInfo.price }}</b>
                    <span><a @click="buy" href="#">去结算（{{ totalInfo.count }}）</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog , Toast  } from 'we-vue'

export default {
    data(){
        return {
            goods:[],
            cart: undefined,
            oldCart:undefined //原来本地商品
        }
    },
    computed:{
        totalInfo(){
            let price = 0
            let count = 0
            if(this.cart){
                for(var i=0;i<this.cart.length;i++){
                    if(this.cart[i].checked == true){
                        price += this.cart[i].price * this.cart[i].buy_count
                        count += this.cart[i].buy_count
                    }
                }
                return {
                    price:price,
                    count:count
                }
            }
            return {
                    price:0,
                    count:0
                }
        }
    },
    methods:{
        checked(k){
            let cart = this.cart.find(v=>v.sku_id==k)

             cart.checked = !cart.checked
            // 把内存中的数据写入浏览器
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        jia(k){
            let cart = this.cart.find(v=>v.sku_id==k)

            cart.buy_count++
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },
        jian(k){
            let cart = this.cart.find(v=>v.sku_id==k)
                    console.log(cart)

            if(cart.buy_count > 1){
                cart.buy_count--
                localStorage.setItem('cart', JSON.stringify(this.cart))
            }
        },
        del(event,k){
            var event = event.target.parentNode.parentNode.parentNode
            event.remove()
            // 删除本地
            // 要删除的商品shu_id
            let cart_del = this.cart.find(v=>v.sku_id==k)
            // 本地存储的所有商品
            for(var i=0;i<this.cart.length;i++){
                if(this.cart[i].sku_id != cart_del.sku_id){
                    let newCart = []
                    newCart.push(this.cart[i])
                    localStorage.setItem('cart', JSON.stringify(newCart))
                    // return
                }
            }

        },
        // 添加地址
        buy(){
            Dialog({
                message: '购物车没有商品、请去添加商品',
                skin: 'ios'
            }).then(()=>{
                this.$router.push('list')
            })
        }
    },
    created(){
        let cart = localStorage.getItem('cart');
        if(cart){
            this.cart = JSON.parse(cart)    
            // 从购物车数组中提取出所有商品的 skuid 并且拼成一个字符串，格式；1,2,3
            let sku_id = this.cart.flatMap(v => v.sku_id).join(',')
            this.axios.get('/goods?ids='+sku_id).then(res=>{
                this.goods = res.data.data
            })
        }
    }
}
</script>


<style scoped>

.add span {
  padding: 0 8px !important;
}

.page-footer {
    position: fixed;
    bottom: 77px;
}
#kong {
    text-align: center;
    line-height: 3000%;
    font-size: 18px;
}

</style>
