<template>
    <section class="features">
        <div class="h1 feature-title">产品特色</div>
        <div class="feature-list">
            <template v-for="(item) in getFeatures" :key="item.id">
                <el-row class="feature-item">
                <el-col :span="6"></el-col>
                <el-col :span="12" class="item-box clearfix">
                    <div class="text-box" :class="item.textOnLeft ? 'left' : 'right'">
                    <div class="text-indextitle" :class="item.textOnLeft ? 'left' : 'right'">
                        <div class="item-index" :class="item.textOnLeft ? 'left' : 'right'">{{item.id}}</div>
                        <div class="item-title" :class="item.textOnLeft ? 'left' : 'right'">{{item.title}}</div>
                    </div>
                    <div class="text-desc-box">
                        <p class="text-desc">{{item.desc[0]}}</p>
                        <p class="text-desc">{{item.desc[1]}}</p>
                        <p class="text-desc">{{item.desc[2]}}</p>
                        <p class="text-desc">{{item.desc[3] ? item.desc[3] : ''}}</p>
                    </div>
                    </div>
                    <div class="img-box" :class="item.imgOnRight ? 'right' : 'left'">
                    <img :src="item.imgUrl" alt="" class="feature-img"  :class="item.imgOnRight ? 'right' : 'left'"/>
                    </div>
                </el-col>
                <el-col :span="6"></el-col>
                </el-row>
            </template>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue'
export default {
    name: "Features",
    setup(props) {
        const getFeatures = [
            {
                id: 1,
                title:'精确语义理解',
                desc: ['丰富的知识库支持', '问法热度一目了然', '上下文语境理解', '多轮交互深度理解'],
                imgUrl: 'feature_1.jpg'
            },
            {
                id: 2,
                title:'商品精准回复',
                desc: ['商品热门标签维护', '自动反问商品链接', '商品信息精准回复', '商品卖点自动触发'],
                imgUrl: 'feature_2.jpg'
            },
            {
                id: 3,
                title:'智能机器学习',
                desc: ['丰富的知识库支持', '问法热度一目了然', '上下文语境理解', '多轮交互深度理解'],
                imgUrl: 'feature_3.jpg'
            },
            {
                id: 4,
                title:'物流查询',
                desc: ['自动抓取物流信息', '不同物流场景话术', '自定义发送时间'],
                imgUrl: 'feature_4.jpg'
            },
            {
                id: 5,
                title:'多种模式',
                desc: ['夜间值守', '拟人模式', '仅提示模式', '模糊推荐模式'],
                imgUrl: 'feature_5.jpg'
            },
            {
                id: 6,
                title:'活动大促',
                desc: ['提供最优活动方案', '活动通知触达买家', '活动催拍催付', '预售、1元预定…'],
                imgUrl: 'feature_6.png'
            },
            {
                id: 7,
                title:'智能催拍催付',
                desc: ['多轮智能催拍', '多轮智能催付', '指定时间推送', '不同场景不同话术'],
                imgUrl: 'feature_7.jpg'
            },
            {
                id: 8,
                title:'未成交挽回',
                desc: ['老客唤醒', '活动营销', '未成交挽回', '定时推送'],
                imgUrl: 'feature_8.png'
            },
            {
                id: 9,
                title:'关联销售',
                desc: ['精准多对多关联', '下单未付款关联营销', '已付款关联营销'],
                imgUrl: 'feature_9.jpg'
            },
            {
                id: 10,
                title:'售后关怀',
                desc: ['发货提醒', '安装指引', '使用帮助', '自动邀好评'],
                imgUrl: 'feature_10.jpg'
            }
        ]
        getFeatures.forEach((item) => {
            item.imgUrl = require(`@/assets/${item.imgUrl}`)
            if(item.id % 2 === 1) {
                item.textOnLeft = true
                item.imgOnRight = true
                item.id = item.id < 10 ? `0${item.id}`: item.id
            } else {
                item.textonLeft = false
                item.imgOnRight = false
                item.id = item.id < 10 ? `0${item.id}`: item.id
            }
        })

        return {
            getFeatures
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
.features {
    margin-bottom: 6.4rem;
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
</style>