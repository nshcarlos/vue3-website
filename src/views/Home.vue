<template>
  <el-container class="content">
    <el-header>
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

    <Footer></Footer>
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
import Footer from '@/components/Footer.vue'


export default {
  name: "Home",
  components: {
    Header,
    ProfileSection,
    ProductFeatures,
    ServiceSection,
    ClientSection,
    Footer
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
  margin-bottom: -1.2rem;
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
</style>
