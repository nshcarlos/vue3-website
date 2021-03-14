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
      
      <section>
        <div class="h1 feature-title">产品特色</div>
        <div class="feature-list">
          <!-- text-box on the left -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box clearfix">
              <div class="text-box">
                <div class="text-indextitle left">
                  <div class="item-index left">01</div>
                  <div class="item-title left">精确语义理解</div>
                </div>
                <div class="text-desc-box">
                  <p class="text-desc">丰富的知识库支持</p>
                  <p class="text-desc">问法热度一目了然</p>
                  <p class="text-desc">上下文语境理解</p>
                  <p class="text-desc">多轮交互深度理解</p>
                </div>
              </div>
              <div class="img-box right">
                <img src="../assets/feature_1.jpg" alt="" class="feature-img right" />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the right -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box">
              <div class="text-box right">
                <div class="text-indextitle">
                  <div class="item-index right">02</div>
                  <div class="item-title right">商品精准回复</div>
                </div>
                <div class="text-desc-box right">
                  <p class="text-desc">商品热门标签维护</p>
                  <p class="text-desc">自动反问商品链接</p>
                  <p class="text-desc">商品信息精准回复</p>
                  <p class="text-desc">商品卖点自动触发</p>
                </div>
              </div>
              <div class="img-box left">
                <img
                  src="../assets/feature_2.jpg"
                  alt="feature_2"
                  class="feature-img left"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the left -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box clearfix">
              <div class="text-box">
                <div class="text-indextitle left">
                  <div class="item-index left">03</div>
                  <div class="item-title left">智能机器学习</div>
                </div>
                <div class="text-desc-box">
                  <p class="text-desc">近十天高频问法</p>
                  <p class="text-desc">金牌客服话术</p>
                  <p class="text-desc">咨询商品清单</p>
                  <p class="text-desc">具体聊天内容</p>
                </div>
              </div>
              <div class="img-box right">
                <img
                  src="../assets/feature_3.jpg"
                  alt="feature_3"
                  class="feature-img right"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the right -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box">
              <div class="text-box right">
                <div class="text-indextitle">
                  <div class="item-index right">04</div>
                  <div class="item-title right">物流查询</div>
                </div>
                <div class="text-desc-box right">
                  <p class="text-desc">自动抓取物流信息</p>
                  <p class="text-desc">不同物流场景话术</p>
                  <p class="text-desc">自定义发送时间</p>
                </div>
              </div>
              <div class="img-box left">
                <img
                  src="../assets/feature_4.jpg"
                  alt="feature_4"
                  class="feature-img left"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the left -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box clearfix">
              <div class="text-box">
                <div class="text-indextitle left">
                  <div class="item-index left">05</div>
                  <div class="item-title left">多种模式</div>
                </div>
                <div class="text-desc-box">
                  <p class="text-desc">夜间值守</p>
                  <p class="text-desc">拟人模式</p>
                  <p class="text-desc">仅提示模式</p>
                  <p class="text-desc">模糊推荐模式</p>
                </div>
              </div>
              <div class="img-box right">
                <img
                  src="../assets/feature_5.jpg"
                  alt="feature_5"
                  class="feature-img right"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the right -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box">
              <div class="text-box right">
                <div class="text-indextitle">
                  <div class="item-index right">06</div>
                  <div class="item-title right">活动大促</div>
                </div>
                <div class="text-desc-box right">
                  <p class="text-desc">提供最优活动方案</p>
                  <p class="text-desc">活动通知触达买家</p>
                  <p class="text-desc">活动催拍催付</p>
                  <p class="text-desc">预售、1元预定…</p>
                </div>
              </div>
              <div class="img-box left">
                <img
                  src="../assets/feature_6.png"
                  alt="feature_6"
                  class="feature-img left"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the left -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box clearfix">
              <div class="text-box">
                <div class="text-indextitle left">
                  <div class="item-index left">07</div>
                  <div class="item-title left">智能催拍催付</div>
                </div>
                <div class="text-desc-box">
                  <p class="text-desc">多轮智能催拍</p>
                  <p class="text-desc">多轮智能催付</p>
                  <p class="text-desc">指定时间推送</p>
                  <p class="text-desc">不同场景不同话术</p>
                </div>
              </div>
              <div class="img-box right">
                <img
                  src="../assets/feature_7.jpg"
                  alt="feature_7"
                  class="feature-img right"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the right -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box">
              <div class="text-box right">
                <div class="text-indextitle">
                  <div class="item-index right">08</div>
                  <div class="item-title right">未成交挽回</div>
                </div>
                <div class="text-desc-box right">
                  <p class="text-desc">老客唤醒</p>
                  <p class="text-desc">活动营销</p>
                  <p class="text-desc">未成交挽回</p>
                  <p class="text-desc">定时推送</p>
                </div>
              </div>
              <div class="img-box left">
                <img
                  src="../assets/feature_8.png"
                  alt="feature_8"
                  class="feature-img left"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the left -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box clearfix">
              <div class="text-box">
                <div class="text-indextitle left">
                  <div class="item-index left">09</div>
                  <div class="item-title left">关联销售</div>
                </div>
                <div class="text-desc-box">
                  <p class="text-desc">精准多对多关联</p>
                  <p class="text-desc">下单未付款关联营销</p>
                  <p class="text-desc">已付款关联营销</p>
                </div>
              </div>
              <div class="img-box right">
                <img
                  src="../assets/feature_9.jpg"
                  alt="feature_9"
                  class="feature-img right"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>

          <!-- text-box on the right -->
          <el-row class="feature-item">
            <el-col :span="6"></el-col>
            <el-col :span="12" class="item-box">
              <div class="text-box right">
                <div class="text-indextitle">
                  <div class="item-index right">10</div>
                  <div class="item-title right">售后关怀</div>
                </div>
                <div class="text-desc-box right">
                  <p class="text-desc">发货提醒</p>
                  <p class="text-desc">安装指引</p>
                  <p class="text-desc">使用帮助</p>
                  <p class="text-desc">自动邀好评</p>
                </div>
              </div>
              <div class="img-box left">
                <img
                  src="../assets/feature_10.jpg"
                  alt="feature_10"
                  class="feature-img left"
                />
              </div>
            </el-col>
            <el-col :span="6"></el-col>
          </el-row>
        </div>
      </section>

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

export default {
  name: "Home",
  components: {
    Header,
    ProfileSection
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

.feature-title,
.servicc-title,
.client-title {
  padding-left: 8rem;
}
.feature-title::after,
.servicc-title::after,
.client-title::after {
  content: "";
  width: 7.8rem;
  display: inline-block;
  background-color: #2d8cf0;
  height: 2px;
  transform: translateX(-7.9rem) translateY(0.86rem);
}

.feature-list {
  margin-left: 2rem;
  margin-top: 1.4rem;
}
.feature-item {
  margin-bottom: 2.4rem;
}

.item-box {
  background-color: transparent;
  position: relative;
  margin-bottom: 5.7rem;
  width: 200px;
  height: 12rem;
}

.text-box {
  position: absolute;
  /* left:0; */
  width: 31.4rem;
  background-color: #2d3a4b;
}
.text-box.right {
  right: 2rem;
}
.text-indextitle,
.text-desc-box {
  display: inline-block;
}
.text-indextitle {
  position: relative;
}
.item-index {
  font-size: 6rem;
  color: #fff;
  padding: 1.4rem 1.8rem;
}
.item-index.right {
  transform: translateX(21rem) translateY(0.4rem);
}
.item-title {
  font-size: 20px;
  color: #2f96f4;
  font-weight: bold;
  padding: 1.4rem 1.6rem;
  margin-top: -2rem;
}
.item-title.right {
  transform: translateX(21rem) translateY(0);
  text-align: center;
}
.text-desc-box {
  position: absolute;
  top: 2rem;
  left: 12rem;
}
.text-desc-box.right {
  position: absolute;
  width: 10rem;
  top: 2rem;
  right: 12rem;
}
.text-desc {
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
}

.img-box {
  display: inline-block;
  position: absolute;
  background-color: #f7fdff;
  width: 28rem;
  height: 15rem;
  box-shadow: -7px -6px 10px 0px rgb(0 0 0 / 15%);
}
.img-box.right {
  top: 1.9rem;
  right: 5.3rem;
}
.img-box.left {
  top: 1.9rem;
  left: 3.6rem;
}
.feature-img.right {
  position: absolute;
  top: -1.6rem;
  right: 2.2rem;
}
.feature-img.left {
  position: absolute;
  top: -1.6rem;
  left: 2.4rem;
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
