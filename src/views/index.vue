<template>
  <div class="wrap">
    <dialogComponent
      :dialog-type="dialogType"
      :dialog-data="dialogData"
      @closeDialog="closeDialog($event)"
    ></dialogComponent>
    {{ docTitle }}
    <button class="dialogBtn" @click="showDialog('common', [1,2,3,4,5,6,7])">弹出</button>
  </div>
</template>

<script>
import dialogComponent from "../components/dialog";
export default {
  components: {
    dialogComponent
  },
  data() {
    return {
      dialogType: "", // 弹窗类型
      dialogData: "", // 弹窗内容
      docTitle: ""
    };
  },
  methods: {
    //显示弹窗
    showDialog: function(type, data) {
      this.dialogType = type;
      this.dialogData = data;
    },
    // 关闭弹窗
    closeDialog: function(value) {
      this.dialogType = value;
    }
  },
};
</script>

<style lang="less" scoped>
.dialogBtn {
  display: block;
  width: 1rem;
  height: 1rem;
  text-align: center;
  font-size: 0.3rem;
  margin: 5rem auto 0;
}
.toEN {
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: brown;
  margin: 1rem auto 0;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}
</style>

