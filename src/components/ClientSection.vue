<template>
    <section>
    <div class="h1 client-title s4">合作客户</div>
    <el-row>
        <el-col :xs="0" :sm="1" :md="1" :lg="6" :xl="6"></el-col>
        <el-col :xs="24" :sm="22" :md="22" :lg="12" :xl="12">
        <el-row class="client-box">
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
.client-box {
    padding-left: 1.6rem;
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
.client-title {
    padding-left: 8rem;
}
.client-title::after {
    content: "";
    width: 7.8rem;
    display: inline-block;
    background-color: #2d8cf0;
    height: 2px;
    transform: translateX(-7.9rem) translateY(0.86rem);
}
</style>