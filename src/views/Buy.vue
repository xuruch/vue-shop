<template>
    <div>
        <header class="top-header fixed-header">
			<a class="icona" href="javascript:history.go(-1)">
					<img src="../assets/images/left.png"/>
			</a>
			<h3>去结算</h3>
			<a class="iconb" href="shopcar.html">
			</a>
        </header>
        
        <div class="contaniner fixed-cont">
            <section class="to-buy">
                <header> 
                    <div class="now">
                        <span><img src="../assets/images/map-icon.png"/></span>
                            <dl>
                                <dt>
                                    <b>弱小喵</b>
                                    <strong>17756084251</strong>
                                </dt>
                                <dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
                                <p>其他地址</p>
                            </dl>
                    </div>
                    
                    <div class="to-now">
                        <div class="tonow">
                                <label for="tonow"  onselectstart="return false" ></label>
                                <input type="checkbox" id="tonow"/>
                        </div>
                        <dl>
                                <dt>
                                    <b>弱小喵</b>
                                    <strong>17756084251</strong>
                                </dt>
                                <dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
                        </dl>
                        <h3><a href="address"><img src="../assets/images/write.png"/></a></h3>
                    </div>
                </header>
                <div class="buy-list">
                    <ul>
                        <a href="detail.html">
                            <figure>
                                <img src="../assets/images/detail-pp01.png"/>
                            </figure>
                            <li>
                                <h3>超级大品牌服装，现在够买只要998</h3>
                                <span>
                                    颜色：经典绮丽款
                                    <br />
                                    尺寸：M
                                </span>
                                <b>￥32.00</b>
                                <small>×3</small>
                            </li>
                        </a>
                    </ul>
                    <dl>
                        <dd>
                            <span>运费</span>
                            <small>包邮</small>
                        </dd>
                        <dd>
                            <span>商品总额</span>
                            <small>￥98.00</small>
                        </dd>
                        <dt>
                            <textarea rows="4" placeholder="给卖家留言（50字以内）"></textarea>
                        </dt>
                    </dl>
                </div>
                
            </section>
            <!--底部不够-->
            <div style="margin-bottom: 9%;"></div>
        </div>
	
        <footer class="buy-footer fixed-footer">
                <p> 
                    <small>总金额</small>
                    <b>￥98.00</b>
                </p>
                    
                    <input type="button" value="去付款"/>
        </footer>
    </div>
</template>


<script>
export default {
    data(){
        return {
            addres:[
                {
                    id:1,
                    name: '弱小喵',
                    mobile: '17756084251',
                    addres: '安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市',
                }
            ]
        }
    }
}
</script>


<style>

</style>
