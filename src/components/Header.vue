<template>
    <el-row>
        <el-col :xs="0" :sm="1" :md="2" :lg="5" :xl="5"></el-col>
        <el-col :xs="24" :sm="22" :md="20" :lg="14" :xl="14" class="header">
            <img src="../assets/logo_complete.png" alt="logo" class="logo" />
            <span class="button-group hidden-sm-and-down">
            <el-button type="primary" size="medium">免费申请</el-button>
            <el-button type="primary" size="medium">登录</el-button>
            </span>
        </el-col>
        <el-col :xs="0" :sm="1" :md="2" :lg="5" :xl="5"> </el-col>
    </el-row>
</template>
<script>
export default {
    name: "Header"
}
</script>
<style scoped>
.header {
    position: relative;
}
.logo {
    transform: scale(0.7, 0.7);
    padding-bottom: 1rem;
    padding-left: 2.8rem;
}
.el-button {
    font-weight: bold;
    background-color: #2d8cf0;
}
.button-group {
    position: absolute;
    right: 0;
    top: 0.9rem;
    transform: translateX(-5.5rem);
}

</style>