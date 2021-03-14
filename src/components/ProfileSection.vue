<template>
    <div class="h1">百答智能客服机器人</div>
    <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="12">
        <div>
            百答专注于电商行业智能客服机器人研发，基于丰富的行业积累以及先进的人工智能开发技术，运用自然语言处理、语义识别、深度学习等技术，打造出集智能回复与智能营销于一体的智能机器人，有效提升客户的回复率与转化率。
        </div>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
    <el-row class="divider-row">
        <el-col :span="6"></el-col>
        <el-col :span="12" class="divider">
        <el-row>
            <el-col :span="24" class="divide-text"
            ><span
                >百答已为<span class="text-orange">500+</span
                >企业提供客服机器人，累计服务买家<span class="text-orange"
                >620,000,000</span
                >次</span
            ></el-col
            >
        </el-row>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>
<script>
export default {
    name: "Profile"
}
</script>
<style scoped>
.h1 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 1.6rem;
}
.divider-row {
    margin-top: 1.2rem;
    margin-bottom: 3.4rem;
}
.divide-text::before,
.divide-text::after {
    content: "";
    width: 23%;
    display: inline-block;
    background-color: #dddddd;
    height: 1px;
    transform: scaleY(0.5);
    transform: translateY(-5px);
}
.divide-text::before {
    margin-right: 0.7rem;
}
.divide-text::after {
    margin-left: 0.7rem;
}
.text-orange {
    color: #f59a23;
}
</style>