<template>
    <div>
        <header class="top-header">
			<a class="icona" href="javascript:history.go(-1)">
					<img src="../assets/images/left.png"/>
				</a>
			<h3>我的资料</h3>
			<a class="iconb" href="shopcar.html">
			</a>
        </header>
        
        <div class="contaniner">
            <ul class="self-data">
                <li>
                    <a href="#">
                        <p>头像</p>
                        <span><img src="../assets/images/right.png"/></span>					
                        <figure><img src="../assets/images/detail-tou.png"/></figure>
                    </a>
                </li>
                <li>
                    <a href="namechange">
                        <p>昵称</p>
                        <span><img src="../assets/images/right.png"/></span>
                        <small>弱小喵</small>
                        
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>性别</p>
                        <span><img src="../assets/images/right.png"/></span>
                        <select>
                            <option>男</option>
                            <option>女</option>
                        </select>
                        
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
