<template>
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
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style scoped>
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