<template>
  <div class="dialog">
    <!-- 蒙版 -->
    <div class="dialog-mask" v-show="maskShow" v-cloak></div>
    <!-- 对话框-通用 -->
    <div class="dialog-common animated jackInTheBox faster " v-show="dialogType == 'common'" v-cloak>
      <span class="close" @click="closeDialog"></span>
      <p class="title">common</p>
      <p class="cont">{{dialogCont}}</p>
    </div>
    <!-- 对话框-登录 -->
    <div class="dialog-common animated jackInTheBox faster" v-show="dialogType == 'login'" v-cloak>
      <span class="close" @click="closeDialog"></span>
      login
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogComponent",
  props: {
    // 接收弹窗类型
    dialogType: {
      value: ""
    },
    // 接收弹窗内容
    dialogData: {
      value: ""
    }
  },
  data() {
    return {
      maskShow: false, // 蒙版状态
      dialogCont: "" // 弹窗内容
    };
  },
  methods: {
    // 关闭弹窗
    closeDialog: function() {
      this.maskShow = false;
      this.$emit("closeDialog", "");
    }
  },
  watch: {
    // 监测弹窗类型变化
    dialogType: function(newVal, oldVal) {
      this.maskShow = newVal;
    },
    // 监测弹窗内容变化
    dialogData: function(newVal, oldVal) {
      this.dialogCont = newVal;
    }
  }
};
</script>

<style lang="less" scoped>
.dialog-mask {
  background-color: rgb(0, 0, 0);
  border-top: 1px solid rgb(0, 0, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  opacity: 0.7;
  z-index: 9998;
}
.dialog-common {
  width: 6rem;
  height: 3rem;
  border-radius: 0.1rem;
  background-color: antiquewhite;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -3rem;
  margin-top: -1.5rem;
  z-index: 9999;
  .close {
    background: url(../assets/images/dialog/close.png) no-repeat;
    background-size: cover;
    width: 0.51rem;
    height: 0.51rem;
    position: absolute;
    top: -0.2rem;
    right: -0.2rem;
    cursor: pointer;
  }
}
</style>