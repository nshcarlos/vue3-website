<template>
    <div class="h1 servicc-title s3">产品服务</div>
    <div class="service-box">
    <el-row>
        <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
        <el-col :xs="24" :sm="22" :md="22" :lg="12" :xl="12" class="service-list">
        <div class="service-item" v-for="item in serviceList" :key="item.id">
            <img :src="item.imgUrl" :alt="item.imgAlt" />
            <div class="mask">
            <p class="service-title">{{item.title}}</p>
            <p class="service-desc">{{item.desc}}</p>
            </div>
        </div>
        <!-- <div class="service-item">
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
        </div> -->
        </el-col>
        <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    name: "Service",
    setup(props) {
        const serviceList = [{
            id: 1,
            title: '管理维护',
            desc: '资深运营人员协助管理维护',
            imgUrl: 'service_1.jpg'
        },{
            id: 2,
            title: '对接响应',
            desc: '实时在线答疑，指导配置技巧',
            imgUrl: 'service_2.jpg'
        },{
            id: 3,
            title: '活动助力',
            desc: '活动大促期间可提供现场支援',
            imgUrl: 'service_3.jpg'
        }]

        let getImgAlt = (url) => {
            const startIndex = url.lastIndexOf('/') + 1
            const endIndex = url.lastIndexOf('.')
            return url.slice(startIndex, endIndex)
        }
        serviceList.forEach((item) => {
            item.imgAlt = getImgAlt(item.imgUrl)
            item.imgUrl = require(`@/assets/${item.imgUrl}`)
        })
        console.log(serviceList);
        return {
            serviceList
        }
    }
}
</script>
<style scoped>
.h1 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1.6rem;
}
.s3 {
    margin-top: -4rem;
    margin-bottom: 1.4rem;
}
.service-box {
    padding-left: 2.4rem;
    margin-bottom: 3.2rem;
}
.servicc-title {
    padding-left: 8rem;
}
.servicc-title::after {
    content: "";
    width: 7.8rem;
    display: inline-block;
    background-color: #2d8cf0;
    height: 2px;
    transform: translateX(-7.9rem) translateY(0.86rem);
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
</style>