<template>
    <div>
      <!-- 引入子视图 -->
      <router-view></router-view>
      <footer class="page-footer fixed-footer">
        <ul>
          <li class="active">
            <router-link to="/">
              <img src="../assets/images/footer01.png"/>
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <router-link to="/assort">
              <img src="../assets/images/footer002.png"/>
              <p>分类</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shopcar">
              <img src="../assets/images/footer003.png"/>
              <p>购物车</p>
            </router-link>
          </li>
          <li>
            <router-link to="/self">
              <img src="../assets/images/footer004.png"/>
              <p>个人中心</p>
            </router-link>
          </li>
        </ul>
      </footer>
    </div>
</template>

<script>

export default {
  created(){
    
  }
}
</script>

