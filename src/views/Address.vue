<template>
    <div>
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:history.go(-1)">
                    <img src="../assets/images/left.png"/>
                </a>
            <h3>男装专区</h3>
                
                <a class="text-top" >
                </a>
        </header>
        
        <div class="contaniner fixed-conta">
            <form action="" method="post" class="change-address" id="save">
                <ul>
                    <li>
                        <label class="addd">收货人：</label>
                        <input type="text" value="" required="required"/>
                    </li>
                    <li>
                        <label class="addd">手机号：</label>
                        <input type="tel" value="" required="required"/>
                    </li>
                    <li>
                        <label class="addd">所在地区：</label>
                        <select>
                            <option>安徽省</option>
                            <option>安徽省</option>
                            <option>安徽省</option>
                        </select>
                        <select>
                            <option>安徽省</option>
                            <option>安徽省</option>
                            <option>安徽省</option>
                        </select>
                        <select>
                            <option>安徽省</option>
                            <option>安徽省</option>
                            <option>安徽省</option>
                        </select>
                    </li>
                    <li>
                        <label class="addd">详细地址：</label>
                        <textarea required="required"></textarea>
                    </li>
                </ul>
                
                <ul>
                    <li class="checkboxa">
                        <input type="checkbox" id="check"/>
                        <label @click="addres_def" class="check" for="check" onselectstart="return false"  >设置为默认地址</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>删除此地址</h3>
                    </li>
                </ul>
                <input type="submit" value="保存" />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        addres_def(e){
            if($(e.target).hasClass('checkd')){
                $(".checkboxa label").removeClass("checkd");
            }else {
                $(".checkboxa label").addClass("checkd");
            }
        }
    }
    
}
</script>

<style>

</style>
