<template>
  <el-container class="content">
    <el-header>
      <!-- <el-row>
        <el-col :xs="0" :sm="1" :md="2" :lg="5" :xl="5"></el-col>
        <el-col :xs="24" :sm="22" :md="20" :lg="14" :xl="14" class="header">
          <img src="../assets/logo_complete.png" alt="logo" class="logo" />
          <span class="button-group hidden-sm-and-down">
            <el-button type="primary" size="medium">免费申请</el-button>
            <el-button type="primary" size="medium">登录</el-button>
          </span>
        </el-col>
        <el-col :xs="0" :sm="1" :md="2" :lg="5" :xl="5"> </el-col>
      </el-row> -->
      <Header/>
    </el-header>

    <el-main>
      <el-image
        :src="require('../assets/banner0.jpg')"
        alt="banner"
        :fit="cover"
        :height="900"
      ></el-image>

      <!-- 公司简介 -->
      <Profile-section />
      
      <!-- 产品特色 -->
      <Product-features></Product-features>

      <!-- 产品服务 -->
      <Service-section></Service-section>

      <!-- 合作客户 -->
      <client-section></client-section>
    </el-main>

    <el-footer>
      <el-row class="contact">
        <el-col :xs="1" :sm="1" :md="1" :lg="5" :xl="5"></el-col>
        <el-col :xs="22" :sm="22" :md="22" :lg="14" :xl="14">
          <div>
            <div>深圳市百答科技有限公司</div>
            <div>公司地址：深圳市南山区高新园桑达科技大厦806室</div>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="5" :xl="5"></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="footer">Copyright ©2020 baida.im 粤ICP备13042535号</div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import { reactive } from "vue";
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import ProductFeatures from '@/components/ProductFeatures.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import ClientSection from '@/components/ClientSection.vue'

export default {
  name: "Home",
  components: {
    Header,
    ProfileSection,
    ProductFeatures,
    ServiceSection,
    ClientSection
  },
  setup() {
    const fits = reactive(["fill", "contain", "cover", "none", "scale-down"]);
    return {
      fits,
    };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}
section {
  margin-bottom: 3rem;
}
.content {
  height: 100%;
}
.el-header {
  margin-bottom: -1rem;
}

.el-main {
  padding-left: 0;
  padding-right: 0;
}
.el-main .h1 {
  font-size: 2rem;
  text-align: center;
  padding-bottom: 1.6rem;
}
.el-main > .el-image {
  margin-bottom: 3rem;
}

/* footer */
.el-footer {
  padding: 0;
  margin: 0;
  margin-top: -4rem;
}
.contact {
  background-color: #333333;
  color: #fff;
  padding: 0 9rem;
  margin: 0;
}
.contact div {
  padding: 5px;
}
.footer {
  background-color: #000000;
  color: #fff;
  text-align: center;
  padding: 0.8rem 0;
  font-size: 0.8rem;
}
</style>
