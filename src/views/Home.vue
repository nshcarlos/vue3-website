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

      <section>
        <div class="h1 servicc-title s3">产品服务</div>
        <div class="service-box">
          <el-row>
            <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
            <el-col :xs="24" :sm="22" :md="22" :lg="12" :xl="12" class="service-list">
              <div class="service-item">
                <img src="../assets/service_1.jpg" alt="service_1" />
                <div class="mask">
                  <p class="service-title">管理维护</p>
                  <p class="service-desc">资深运营人员协助管理维护</p>
                </div>
              </div>
              <div class="service-item">
                <img src="../assets/service_2.jpg" alt="service_2" />
                <div class="mask">
                  <p class="service-title">对接响应</p>
                  <p class="service-desc">实时在线答疑，指导配置技巧</p>
                </div>
              </div>
              <div class="service-item">
                <img src="../assets/service_3.jpg" alt="service_3" />
                <div class="mask">
                  <p class="service-title">活动助力</p>
                  <p class="service-desc">活动大促期间可提供现场支援</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
          </el-row>
        </div>
      </section>

      <section>
        <div class="h1 client-title s4">合作客户</div>
        <el-row>
          <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
          <el-col :xs="24" :sm="22" :md="22" :lg="12" :xl="12">
            <el-row>
              <el-col :span="24" class="client-row">
                <div><img src="../assets/client_1.jpg" alt="" /></div>
                <div><img src="../assets/client_2.png" alt="" /></div>
                <div><img src="../assets/client_3.png" alt="" /></div>
                <div><img src="../assets/client_4.png" alt="" /></div>
                <div><img src="../assets/client_5.png" alt="" /></div>
                <div><img src="../assets/client_6.png" alt="" /></div>
              </el-col>
              <el-col :span="24" class="client-row">
                <div><img src="../assets/client_7.png" alt="" /></div>
                <div><img src="../assets/client_8.png" alt="" /></div>
                <div><img src="../assets/client_9.png" alt="" /></div>
                <div><img src="../assets/client_10.png" alt="" /></div>
                <div><img src="../assets/client_11.png" alt="" /></div>
                <div><img src="../assets/client_more.png" alt="" /></div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
        </el-row>
      </section>
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

export default {
  name: "Home",
  components: {
    Header,
    ProfileSection,
    ProductFeatures
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


.s3 {
  margin-top: -4rem;
  margin-bottom: 1.4rem;
}
.service-box {
  padding-left: 2.4rem;
}
.service-list {
  padding-right: 2.4rem;
  display: flex;
  justify-content: space-between;
}
.service-item {
  position: relative;
}
.service-item > img {
  width: 100%;
  height: 100%;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.service-title,
.service-desc {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}
.service-title {
  position: absolute;
  top: 1rem;
  left: 5.2rem;
}
.service-desc {
  position: absolute;
  top: 5rem;
  left: 1.2rem;
}
.client-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.client-row > img {
  flex-shrink: 0;
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
